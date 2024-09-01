export interface TaskerDayItem {
  id: string
  day: Date
}

export interface TaskItem {
  id: string
  title: string
  taskTime: Date
  isCompleted: boolean
}
