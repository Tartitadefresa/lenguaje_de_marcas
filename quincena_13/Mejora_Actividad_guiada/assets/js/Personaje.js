class Personaje {
    #name;
    #house;
    #dateOfBirth;
    #image;

    constructor(name, house, dateOfBirth, image) {
        this.setName(name);
        this.setHouse(house);
        this.setDateOfBirth(dateOfBirth);
        this.setImage(image);
    }

    setName(name) {
        this.#name = name;
    }
    
    setHouse(house) {
        if (house === "") {
          house = "No asignada";
        }
        this.#house = house;
    }
    
    setDateOfBirth(dateOfBirth) {
        if (dateOfBirth === null) {
          dateOfBirth = "";
        }
        this.#dateOfBirth = dateOfBirth;
    }
    
    setImage(image) {
        if (image === "") {
          image = "assets/images/no_image.png";
        }
        this.#image = image;
    }
    
    getHtmlCard() {
        return `
        <tr>
            <td> <img class="hero-profile-img" src="${
              this.#image
            }" width="100"  alt="${this.#name}"></td>
            <td>${this.#name}</td>
            <td>${this.#house}</td>
            <td>${this.#dateOfBirth}</td>
        </tr>
        `;
    }
    
    static fromJson(jsonObject) {
        return new Personaje(
          jsonObject.name,
          jsonObject.house,
          jsonObject.dateOfBirth,
          jsonObject.image
        );
    }
}



export { Personaje };
   