function byId(id){return document.getElementById(id)}
document.getElementById('year').textContent = new Date().getFullYear()

function openPledge(){
  document.querySelector('.pledge-form').scrollIntoView({behavior:'smooth'})
}

function handlePledge(e){
  e.preventDefault()
  const name = byId('name').value.trim()
  const email = byId('email').value.trim()
  const amount = byId('amount').value.trim()
  const msg = byId('message').value.trim()

  const body = encodeURIComponent(
    `Hello Kariandusi WRUA,%0D%0A%0D%0AI would like to pledge a donation.%0D%0A%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0AAmount: ${amount}%0D%0AMessage: ${msg}%0D%0A%0D%0AThank you!`
  )
  const mailto = `mailto:Kariandusihotsprings@gmail.com?subject=Donation%20Pledge&body=${body}`
  window.location.href = mailto
  const status = document.getElementById('form-status')
  status.textContent = 'Opening your email client to send the pledge…'
  return false
}
