
const secondHandle = document.querySelector('.handle__second')
const minuteHandle = document.querySelector('.handle__minute')
const hourHandle = document.querySelector('.handle__hour')
const millisecond = document.querySelector('.handle__millisecond')
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
const milliseconds = d.getMilliseconds()

const extraMinutesAngle = seconds * 0.1
const minutesAngle = minutes * 6 + extraMinutesAngle

const extraHoursAngle = minutes * 0.5
const hoursHandle = hours * 30

const extraMillisecondsAngle = minutes * 0.5
const millisecondsHandle = hours * 30


secondHandle.style.transform = `translate(-50%) rotate(${seconds * 6}deg)`
hourHandle.style.transform = `translate(-50%) rotate(${hoursHandle}deg)`
minuteHandle.style.transform = `translate(-50%) rotate(${minutesAngle}deg)`
millisecondHandle.style.transform = `translate(-50%) rotate(${millisecondsAngle}deg)`
//requestAnimationFrame(setHandles)
}