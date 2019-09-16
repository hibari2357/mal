const pr_str = (obj) => {
  if(Array.isArray(obj)){
    const str = '(';
    const list = [];
    obj.forEach((item) => {
      list.push(pr_str(item));
    });
    return str + list.join(' ') + ')';
  } else if(typeof obj === 'symbol'){
    return Symbol.keyFor(obj);
  } else {
    return obj.toString();
  }
};

module.exports = {
  pr_str,
};
