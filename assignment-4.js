function calculateTax(income, expenses) {
      if (income >= 0 && expenses >= 0 && income >= expenses) {
            const totalIncome = income - expenses
            const tax = totalIncome * 0.2
            return tax
      }
      else {
            return 'Invalid Input'
      }
}





function sendNotification(email) {
      const chackValidEmail = email.indexOf('@')
      if (chackValidEmail === -1) {
            return 'Invalid Email';
      }
      else {
            const emailslice = email.split('@')
            const userName = emailslice[0]
            const domain = emailslice[1]
            const notification = userName + ' ' + 'sent you an email from' + ' ' + domain;
            return notification;
      }
}

function checkDigitsInName(name) {
      if (typeof (name) === "string") {
            const nameWords = name.split('')
            for (const nameWord of nameWords) {


                  if (isNaN(parseFloat(nameWord)) === false) {
                        return true
                  }

            }
            return false
      }
      else {
            return 'Invalid Input'
      }
}

function calculateFinalScore(obj) {
      const name = obj.name
      const testScore = obj.testScore
      const schoolGrade = obj.schoolGrade
      const isFFamily = obj.isFFamily
      if (typeof (obj) === "object" && typeof (name) == "string" && typeof (testScore) === "number" && testScore <= 50 && typeof (schoolGrade) === "number" && schoolGrade <= 30 && typeof (isFFamily) === "boolean") {
            let totalGrede = testScore + schoolGrade
            if (isFFamily === true) {
                  totalGrede += 20
            }
            if (totalGrede >= 80) {
                  return true
            }
            else {
                  return false
            }
      }
      else {
            return "Invalid Input"
      }
}


function waitingTime(waitingTimes, serialNumber) {

      if (Array.isArray(waitingTimes) === true && typeof (serialNumber) === "number") {
            let totalTime = 0
            for (const waitingTime of waitingTimes) {
                  totalTime += waitingTime
            }
            const avgTime = totalTime / waitingTimes.length;
            const UpSerialNumber = serialNumber - 1 - waitingTimes.length
            const willWait = Math.round(avgTime) * UpSerialNumber
            return willWait
      }
      else {
            return 'Invalid Input'
      }

}



