const DB_NAME = 'tasker_db'
const DB_VERSION = 1
const TASKS_STORE_NAME = 'tasks'

import type { TaskItem } from '../types/types'

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = (event: IDBVersionChangeEvent): void => {
      const db = (event.target as IDBOpenDBRequest).result
      if (!db.objectStoreNames.contains(TASKS_STORE_NAME)) {
        const store = db.createObjectStore(TASKS_STORE_NAME, { keyPath: 'id' })
        store.createIndex('taskTime', 'taskTime', { unique: false })
      }
    }

    request.onsuccess = (): void => resolve(request.result)
    request.onerror = (): void => reject(request.error)
  })
}

export async function addTaskItem(item: TaskItem): Promise<string> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(TASKS_STORE_NAME, 'readwrite')
    const store = transaction.objectStore(TASKS_STORE_NAME)
    const request = store.add({ ...item, day: item.taskTime })

    request.onsuccess = (): void => resolve(request.result as string)
    request.onerror = (): void => reject(request.error)
  })
}

export async function getAllItems(): Promise<TaskItem[]> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(TASKS_STORE_NAME, 'readonly')
    const store = transaction.objectStore(TASKS_STORE_NAME)

    const request = store.getAll()

    request.onsuccess = (): void => resolve(request.result as TaskItem[])
    request.onerror = (): void => reject(request.error)
  })
}

export async function getAllItemsGroupedByDate(): Promise<Map<string, TaskItem[]>> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(TASKS_STORE_NAME, 'readonly')
    const store = transaction.objectStore(TASKS_STORE_NAME)
    const index = store.index('taskTime')

    const request = index.openCursor()
    const tasksByDate = new Map<string, TaskItem[]>()
    const datesSet = new Set<string>()

    request.onsuccess = (event: Event): void => {
      const cursor = (event.target as IDBRequest).result
      if (cursor) {
        const task = cursor.value as TaskItem
        const taskDate = new Date(task.taskTime)
        const dateString = taskDate.toISOString().split('T')[0]

        if (!tasksByDate.has(dateString)) {
          tasksByDate.set(dateString, [])
        }
        tasksByDate.get(dateString)!.push(task)
        datesSet.add(dateString)
        cursor.continue()
      } else {
        // Convert Set to sorted array of dates
        const sortedDates = Array.from(datesSet).sort()

        // Create a new Map with sorted dates
        const sortedTasksByDate = new Map<string, TaskItem[]>()
        sortedDates.forEach((date) => {
          sortedTasksByDate.set(date, tasksByDate.get(date) || [])
        })

        resolve(sortedTasksByDate)
      }
    }

    request.onerror = (): void => reject(request.error)
  })
}
