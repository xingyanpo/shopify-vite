function generateString() {
  const args = arguments[0];
  const fragment = args[0];
  const insets = Array.prototype.slice.call(args, 1);
  let result = '';
  for (let i = 0; i < fragment.length; i++) {
    result += fragment[i].replace(/['"]/g, '').trim();
    if (i < fragment.length - 1) result += insets[i].trim().replace(/['"]/g, '');
  }
  return result;
}
HTMLElement.prototype.styles = function () {
  const styles = generateString(arguments);
  let curStyle = this.getAttribute('style');
  if (curStyle) {
    curStyle += styles;
  } else {
    curStyle = styles;
  }
  this.style = curStyle;
  return this;
}
HTMLElement.prototype.props = function () {
  const propString = generateString(arguments);
  propString
    .split(';')
    .map((it) => {
      const parts = it.trim().split(':');
      const key = parts[0].trim();
      let value = parts.slice(1).join(':').trim();
      if (value.indexOf(';') === value.length - 1) value = value.substring(0, value.length - 1);
      return [key, value];
    })
    .forEach(([k, v]) => {
      if (!k) return;
      this[k] = v.replace(/^["']|["']$/g, '');
    });
  return this;
}
HTMLElement.prototype.content = function () {
  const text = generateString(arguments);
  this.textContent = text;
  return this;
}
HTMLElement.prototype.html = function () {
  const text = generateString(arguments);
  this.innerHTML = text;
  return this;
}
HTMLElement.prototype.text = function () {
  const text = generateString(arguments);
  this.innerText = text;
  return this;
} // 标签化模板字符串