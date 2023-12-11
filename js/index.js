const { createApp } = Vue

createApp({
    data() {
        return {
            activeIndex: 0,
            newMessage: "",
            searchContent: "",
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },

    methods: {
        changeChat(index) { 
            this.activeIndex = index;
        },
        getMessageTime: messageTime => luxon.DateTime.fromFormat(messageTime, "dd/LL/yyyy HH:mm:ss").toFormat("HH:mm"),
        getTime: () => luxon.DateTime.now().toFormat("dd/LL/yyyy HH:mm:ss"),
        removeMessage(index, activeIndex) { 
            this.contacts[activeIndex].messages.splice(index, 1); 
        },
        deleteChat(index) { 
            this.contacts.splice(index,1); 
        },
        uploadAvatar() {
            let newAvatar = prompt("Inserisci il link all'immagine: ").trim();
            this.contacts[this.activeIndex].avatar = newAvatar;
        },
        addMessage() {
            this.newMessage != "" ? this.contacts[this.activeIndex].messages.push({ date: this.getTime(), message: this.newMessage, status: 'sent'}) : alert("Insert valid text!");
            this.newMessage = "";
            setTimeout(() => {
                this.contacts[this.activeIndex].messages.push({ date: this.getTime(), message: "Ok", status: 'received'});
            }, 1000);
        },
        addContact() {
            const newContact = prompt("Inserisci il nuove utente: ");
            this.contacts.push({ name: newContact , avatar: '', visible: true, messages: [] });
        },
        getInitials(name) {
            let parts = name.split(' ');
            let initials = '';
            for (let i = 0; i < parts.length; i++) {
                if (parts[i] !== '') initials += parts[i][0];
            }
            return initials;
        },
        openContextMenu(event, index) {
            event.preventDefault();

            let contextmenu = document.querySelector("aside .chatShelf .contextmenu");
            let x = event.pageX, y = event.pageY;

            contextmenu.style.left = `${x}px`;
            contextmenu.style.top = `${y}px`;
            contextmenu.style.visibility = "visible";

            document.addEventListener("click", () => {
                contextmenu.style.visibility = "hidden";
            });
        },
        search(name) {
            return name.toLowerCase().includes(this.searchContent.toLowerCase()) ? true : false;
        }
    },
}).mount('#app')