
const secondHandle = document.querySelector('.handle__second')
const minuteHandle = document.querySelector('.handle__minute')
const hourHandle = document.querySelector('.handle__hour')

//requestAnimationFrame(setHandles)

setInterval(() => {
 setHandles()
},1000)


function setHandles() {
  console.log('called')
const d = new Date()


const hours = d.getHours()
const minutes = d.getMinutes()
const seconds = d.getSeconds()

const extraMinutesAngle = seconds * 0.1
const minutesAngle = minutes * 6 + extraMinutesAngle

const extraHoursAngle = minutes * 0.5
const hoursHandle = hours * 30


secondHandle.style.transform = `translate(-50%) rotate(${seconds * 6}deg)`
hourHandle.style.transform = `translate(-50%) rotate(${hoursHandle}deg)`
minuteHandle.style.transform = `translate(-50%) rotate(${minutesAngle}deg)`

//requestAnimationFrame(setHandles)
}