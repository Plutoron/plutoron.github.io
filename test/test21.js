function getDays(start, end) {
  let startTime = new Date(start)
  let endTime = new Date(end)
  let days = []
  while (startTime <= endTime) {
    days.push(startTime.getFullYear() + '-' + (startTime.getMonth() + 1) + '-' + startTime.getDate())
    startTime.setDate(startTime.getDate() + 1)
  }
  return days
}

getDays('2015-2-8', '2015-3-3')
