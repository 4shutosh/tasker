import { writable, type Writable } from 'svelte/store'
import type { TaskItem } from '../types/types'
import { getAllItemsGroupedByDate } from './tasksDb'

export const allTasksDayMap: Writable<Map<string, TaskItem[]>> = writable(
  new Map<string, TaskItem[]>()
)

export async function fetchAllTasksPerDay(): Promise<void> {
  const fetchedItems: Map<string, TaskItem[]> = await getAllItemsGroupedByDate()
  allTasksDayMap.set(fetchedItems)
}
