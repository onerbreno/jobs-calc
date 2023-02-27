module.exports = {
    remainingDays(job) {
        const estimatedDays = (job["total-hours"] / job["daily-hours"]).toFixed()
    
        const createdDate = new Date(job.createdAt)
        const dueDay = createdDate.getDate() + Number(estimatedDays)
        const dueDateInMs = createdDate.setDate(dueDay)
    
        const timeDiffInMs = dueDateInMs - Date.now()
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs)
        
        return dayDiff
    },
    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}