//Enlace directo a booking
document.getElementById('open-booking').addEventListener('click', function() {
  chrome.windows.create({
    url: 'https://booking.builderall.com/',
    type: 'popup'
  });
});
//Enlace directo a builderall-builder
document.getElementById('open-builder').addEventListener('click', function() {
  chrome.windows.create({
    url: 'https://office.builderall.com/es/office/cheetah-builder',
    type: 'popup'
  });
});
//Enlace directo a builderzap
document.getElementById('open-builderzap').addEventListener('click', function() {
  chrome.windows.create({
    url: 'https://office.builderall.com/es/office/whatsapp-boss',
    type: 'popup'
  });
});
//Enlace directo a mailingboss-v2
document.getElementById('open-mailingboss').addEventListener('click', function() {
  chrome.windows.create({
    url: 'https://office.builderall.com/es/office/mailingboss-v2',
    type: 'popup'
  });
});
//Enlace directo a panel de afiliados
document.getElementById('open-afiliados').addEventListener('click', function() {
  chrome.windows.create({
    url: 'https://office.builderall.com/es/office/franchise-system',
    type: 'popup'
  });
});
//Enlace directo a worckie
document.getElementById('open-worckie').addEventListener('click', function() {
  chrome.windows.create({
    url: 'https://office.builderall.com/es/office/worckie',
    type: 'popup'
  });
});
//Enlace directo a crm-builderall
document.getElementById('open-crm').addEventListener('click', function() {
  chrome.windows.create({
    url: 'https://office.builderall.com/es/office/crm',
    type: 'popup'
  });
});
//Enlace directo a administrador-dns
document.getElementById('open-dns').addEventListener('click', function() {
  chrome.windows.create({
    url: 'https://office.builderall.com/es/office/dns-manager',
    type: 'popup'
  });
});
//Enlace directo a helpdesk
document.getElementById('open-helpdesk').addEventListener('click', function() {
  chrome.windows.create({
    url: 'https://office.builderall.com/es/office/helpdesk',
    type: 'popup'
  });
});
//Enlace directo a delivery
document.getElementById('open-delivery').addEventListener('click', function() {
  chrome.windows.create({
    url: 'https://office.builderall.com/es/office/delivery',
    type: 'popup'
  });
});