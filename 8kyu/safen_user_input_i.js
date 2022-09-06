// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;



function htmlspecialchars(formData) {
  formData = formData.replace(new RegExp('\&', 'g'), '&amp;')
  formData = formData.replace(new RegExp('\<', 'g'), '&lt;')
  formData = formData = formData.replace(new RegExp('\>', 'g'), '&gt;')
  formData = formData.replace(new RegExp('\"', 'g'), '&quot;')
  return formData
}