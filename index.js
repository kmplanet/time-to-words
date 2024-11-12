// expecting time to be a string in the format like '8:15' or '12:30'

function convertTimeToWords(time) {
  // TODO: real code goes here!
  const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty-three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
  ];

  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }
  let splitted = time.split(':');
  let hour = splitted[0];
  let minutes = splitted[1];

  if (minutes === '0') {
    return `${words[hour]} o'clock`;
  } else if (minutes > 0 && minutes < 30) {
    return `${words[minutes]} past ${words[hour]}`;
  } else if (minutes === '30') {
    return `half past ${words[hour]}`;
  } else if (minutes === '45') {
    return `quarter to ${words[hour + 1]}`;
  } else if (minutes > 30 && minutes < 45) {
    return `${words[60 - minutes]} to ${words[hour + 1]}`;
  } else if (minutes > 45 && minutes < 60) {
    return `${words[60 - minutes]} to ${words[hour + 1]}`;
  }
}

module.exports = { convertTimeToWords };
