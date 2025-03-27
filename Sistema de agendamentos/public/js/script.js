document.addEventListener("DOMContentLoaded", () => {
  function loadAppointments() {
    fetch("/appointments")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar agendamentos");
        }
        return response.json();
      })
      .then((appointments) => {
        const appointmentsList = document.getElementById("appointments-list");
        appointmentsList.innerHTML = "";

        if (appointments.length === 0) {
          appointmentsList.innerHTML = "<p>Não há agendamentos recentes.</p>";
        } else {
          appointments.forEach((appointment) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${appointment.name} - ${appointment.service} - ${appointment.date}`;
            appointmentsList.appendChild(listItem);
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar agendamentos:", error);
      });
  }

  const form = document.getElementById("appointment-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    const newAppointment = { name, service, date };

    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAppointment),
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("form-message").textContent =
            "Agendamento enviado com sucesso!";
          loadAppointments(); 
        } else {
          document.getElementById("form-message").textContent =
            "Erro ao enviar agendamento.";
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar agendamento:", error);
        document.getElementById("form-message").textContent =
          "Erro ao enviar agendamento.";
      });
  });

  loadAppointments();
});

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.href = "/admin";
        } else {
          document.getElementById("login-message").textContent = data.message || "Credenciais inválidas.";
        }
      })
      .catch((error) => {
        console.error("Erro ao realizar login:", error);
        document.getElementById("login-message").textContent = "Erro ao realizar login.";
      });
  });
});

