<template>
    <div class="flex relative z-20">
        <div>
            <NavBar />
        </div>
        <div class="bg-light-color maincontent self-baseline px-4">
            <!--Formulär för att lägga till en användare-->
            <form class="mt-2" @submit.prevent="addUser()">
                <h2 class="text-center font-headings text-xl font-bold py-3">Lägg till användare</h2>
                <p class="formtext text-base">Denna användare får tillgång till handlingslistan. Perfekt inför fest,
                    familjemiddag eller storhandlingen! </p>

                <!--Meddelande om användare läggs till-->
                <div class="text-center mt-5 text-base font-content font-bold text-dark-color" v-if="success">
                    {{ success }} <i class="fa-solid fa-circle-check text-green-600"></i>
                </div>

                <!--Användarens mailadress-->
                <div class="input">
                    <label class="font-bold font-headings mt-3 text-base" for="email">Mailadress</label><br>
                    <input v-model="email" type="email" id="email" name="email"
                        class="border-solid border border-slate-400 shadow-sm w-full bg-white p-1">
                    <!-- Kontroll om felmeddelande och skriver ut om fel -->
                    <div class=" text-error font-bold font-content" v-if="emailError">
                        <span>{{ emailError }}</span>
                    </div>
                </div>



                <!--Användarens lösenord-->
                <div class="input">
                    <label class="font-bold font-headings" for="password">Lösenord</label><br>
                    <input v-model="password" type="password" id="password" name="password"
                        class="border-solid border border-slate-400 shadow-sm w-full bg-white p-1">
                    <!-- Kontroll om felmeddelande och skriver ut om fel -->
                    <div class=" text-error font-bold font-content" v-if="passwordError">
                        <span>{{ passwordError }}</span>
                    </div>
                </div>




                <!--Upprepa lösenord-->
                <div class="input">
                    <label class="font-bold font-headings" for="verified">Upprepa lösenord</label><br>
                    <input v-model="verifiedPassword" type="password" id="verified" name="verified"
                        class="border-solid border border-slate-400 shadow-sm w-full bg-white p-1">

                    <!-- Kontroll om felmeddelande och skriver ut om fel -->
                    <div class=" text-error font-bold font-content" v-if="passwordVerifyError">
                        <span>{{ passwordVerifyError }}</span>
                    </div>
                    <!-- Kontroll om felmeddelande och skriver ut om fel -->
                    <div class=" text-error font-bold font-content" v-if="verifiedError">
                        <span>{{ verifiedError }}</span>
                    </div>
                </div>

                <!--Knapp för att lägga till-->
                <div class="mt-8">
                    <button class="p-3 rounded-md shadow-md bg-complement-color text-white" type="submit">Lägg till
                    </button>
                </div>



            </form>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/Navbar.vue';
export default {
    components: {
        NavBar
    },
    data() {
        return {
            email: "",
            password: "",
            verifiedPassword: "",
            passwordError: "",
            verifiedError: "",
            emailError: "",
            success: "",
            passwordVerifyError: ""
        }
    },
    methods: {
        //Metod för att lägga till en användare
        async addUser() {
            //Kontroll om lösenorden stämmer överens med 
            if (this.password === this.verifiedPassword) {
                if (this.email && this.password != "") {
                    let registerBody = {
                        email: this.email,
                        password: this.password
                    };
                    //Fetch-anrop med metoden POST
                    const resp = await fetch("http://localhost:3000/users/adduser", {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(registerBody)
                    });
                    const data = await resp.json();


                    //Lägger til ett meddelande om användaren registreras
                    this.success = data.message;
                    //Gör tomma om det lyckas
                    this.emailError = "";
                    this.passwordError = "";
                    this.passwordVerifyError = "";
                    this.verifiedError = "";
                } else {
                    //Gör meddelandena tomma
                    this.emailError = "";
                    this.passwordError = "";
                    this.passwordVerifyError = "";
                    this.success = "";
                    this.verifiedError = "";
                    //Felmeddelanden
                    if (!this.email) {
                        this.emailError = "Fyll i en giltig mailadress";
                    }
                    if (!this.password) {
                        this.passwordError = "Fyll i ett lösenord";
                    }
                    if (!this.passwordVerifyError) {
                        this.passwordVerifyError = "Lösenordet måste upprepas";
                    }
                }
            } else {
                //Meddelande om lösenorden inte stämmer överens
                this.verifiedError = "Lösenorden matchar inte."
                this.passwordError = "";
                this.passwordVerifyError = "";
                this.emailError = "";
                //Felmeddelanden
                if (!this.email) {
                    this.emailError = "Fyll i en giltig mailadress";
                }
                if (!this.password) {
                    this.passwordError = "Fyll i ett lösenord";
                }
            }
        }
    }
}

</script>


<style scoped>
.maincontent {
    max-width: 500px;
    width: 100%;
    margin: 1rem auto;
}

.input {
    max-width: 300px;
    width: 100%;
    margin: 2rem auto;
    display: block;
}

input[type="text"],
select {
    width: 100%;
}

.formtext {
    max-width: 450px;
    width: 100%;
    margin: auto;
}


button {
    max-width: 200px;
    width: 100%;
    margin: 4rem auto;
    display: block;
    color: white;
}
</style>

