function match(candidate, job) {
  if(!candidate.minSalary || !job.maxSalary) throw new Error('parameter must be a number')
  
  return candidate.minSalary * 0.9 <= job.maxSalary
}