//SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");
//remove active class
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".popup").style.display = "none";
    } else {
      document.querySelector(".popup").style.display = "block";
      document.querySelector(
        "#notifications .notifications-count"
      ).style.display = "none";
    }
  });
});

//MESSAGES
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = messages.querySelector("#message-search");

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
  messagesNotification.querySelector(".notifications-count").style.display =
    "none";
});

//Search chat
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};
messageSearch.addEventListener("keyup", searchMessage);

/// THEME
const theme = document.querySelector("#theme");
const themeModel = document.querySelector(".customize-theme");
const fontSize = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");

const openThemeModel = () => {
  themeModel.style.display = "grid";
};

// close Model
const closeThemeModel = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModel.style.display = "none";
  }
};
themeModel.addEventListener("click", closeThemeModel);

theme.addEventListener("click", openThemeModel);

const removeSize = () => {
  fontSize.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSize.forEach((size) => {
  size.addEventListener("click", () => {
    removeSize();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-12rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }

    //Change font size
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//Change Primary Colors
const colorPalette = document.querySelectorAll(".choose-color span");
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

Bg1.addEventListener("click", () => {
  Bg1.classList.add("active");
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  lightColorLightness = "15%";
  whiteColorLightness = "20%";
  darkColorLightness = "95%";
  Bg2.classList.add("active");
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});

Bg3.addEventListener("click", () => {
  lightColorLightness = "0%";
  whiteColorLightness = "10%";
  darkColorLightness = "95%";
  Bg3.classList.add("active");
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});
