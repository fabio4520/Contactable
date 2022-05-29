const avatar = (current) =>
  ({
    Friends: "../../assets/friend.svg",
    Family: "../../assets/family.svg",
    Work: "../../assets/work.svg",
    Acquaintance: "../../assets/acq.svg",
  }[current]);

export const cardHtml = (contact) => {
  return `
      <div class="box container is-max-desktop contactCard">
        <!-- img perfil -->
        <figure class="image is-48x48">
          <img
            src="${avatar(contact.relation)}"
            alt="Placeholder image"
          />
        </figure>
        <!-- name -->
        <p class="is-6">${contact.name}</p>
        <!-- icon -->
        <span class="icon">
          <i class="fas fa-star"></i>
        </span>
      </div>`;
};
