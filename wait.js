// localStorage에서 불러오거나 초기값 설정
let currentTicket = Number(localStorage.getItem("ticket")) || 0;

// 초기 화면 표시
document.getElementById("ticketDisplay").innerText = currentTicket;

function issueTicket() {
  currentTicket++;
  document.getElementById("ticketDisplay").innerText = currentTicket;
  localStorage.setItem("ticket", currentTicket);
}
