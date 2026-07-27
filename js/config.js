/* =========================================================
   MENTRE ESTIGUEM LLUNY
   Configuración general de la página

   Aquí podrás cambiar:
   - Fechas
   - Mensajes
   - Sorpresas
   - Archivos PDF
   - Textos generales
   ========================================================= */

window.APP_CONFIG = {

    /* =====================================================
       INFORMACIÓN GENERAL
       ===================================================== */

    appName: "Mentre estiguem lluny",

    locale: "ca-ES",

    version: "1.0.0",

    names: {
        recipient: "",
        sender: ""
    },


    /* =====================================================
       FECHAS PRINCIPALES

       El contador terminará el 30 de agosto de 2026.
       La hora está configurada a las 10:00 en España.
       ===================================================== */

    dates: {
        experienceStart: "2026-08-03T00:00:00+02:00",

        reunion: "2026-08-30T10:00:00+02:00"
    },


    /* =====================================================
       MODO DE PRUEBA

       previewDate permite simular una fecha concreta.

       Uso normal:
       previewDate: null

       Para probar, por ejemplo, el día 10 de agosto:
       previewDate: "2026-08-10T12:00:00+02:00"
       ===================================================== */

    debug: {
        enabled: false,
        previewDate: null
    },


    /* =====================================================
       CONTADOR
       ===================================================== */

    countdown: {
        targetDate: "2026-08-30T10:00:00+02:00",

        defaultMessage:
            "Cada segon és un segon menys per tornar-te a veure.",

        lastDayMessage:
            "Ja només falta un dia per tornar-nos a veure.",

        finishedMessage:
            "El compte enrere ha acabat. Per fi tornem a estar junts.",

        labels: {
            days: "Dies",
            hours: "Hores",
            minutes: "Minuts",
            seconds: "Segons"
        }
    },


    /* =====================================================
       MENSAJES DIARIOS

       Se mostrará el mensaje correspondiente a cada fecha.

       Si una fecha no tiene mensaje propio, se utilizará uno
       de los mensajes alternativos de fallbackMessages.
       ===================================================== */

    dailyMessages: [

        {
            date: "2026-08-03",
            text:
                "Avui comença aquest petit espai nostre. Perquè, encara que estiguem lluny, puguis sentir-me una mica més a prop."
        },

        {
            date: "2026-08-04",
            text:
                "Només ha passat un dia i ja tinc ganes de tornar-te a veure somriure davant meu."
        },

        {
            date: "2026-08-05",
            text:
                "Hi ha persones que, fins i tot des de lluny, continuen fent que qualsevol dia sigui una mica millor."
        },

        {
            date: "2026-08-06",
            text:
                "Avui és el meu aniversari, però una de les coses més boniques d’aquest any ha estat trobar-te a tu."
        },

        {
            date: "2026-08-07",
            text:
                "Espero que Londres t’estigui regalant moments preciosos. Jo, mentrestant, guardo les ganes d’escoltar-los tots."
        },

        {
            date: "2026-08-08",
            text:
                "M’agrada pensar que, encara que avui mirem paisatges diferents, continuem compartint el mateix cel."
        },

        {
            date: "2026-08-09",
            text:
                "Demà també marxaré jo. Comença la part del viatge en què tots dos estarem lluny, però continuarem estant junts."
        },

        {
            date: "2026-08-10",
            text:
                "Avui comença el meu viatge. Emporto moltes coses, però sobretot m’emporto les ganes de tornar a tu."
        },

        {
            date: "2026-08-11",
            text:
                "Potser avui no puc abraçar-te, però sí recordar-te que ets una de les parts més boniques dels meus dies."
        },

        {
            date: "2026-08-12",
            text:
                "Les distàncies es mesuren en quilòmetres. El que sentim, per sort, no."
        },

        {
            date: "2026-08-13",
            text:
                "Avui només volia deixar-te una cosa molt senzilla: et trobo a faltar."
        },

        {
            date: "2026-08-14",
            text:
                "Quan tornem, tindrem moltes històries per explicar-nos i molts moments nous per començar."
        },

        {
            date: "2026-08-15",
            text:
                "Ja hem arribat a la meitat. Cada dia que passa ens acosta una mica més."
        },

        {
            date: "2026-08-16",
            text:
                "M’agrada la manera com has arribat a la meva vida: sense fer soroll, però fent que moltes coses sonin millor."
        },

        {
            date: "2026-08-17",
            text:
                "Espero que avui tinguis un dia bonic. I, si no ho és tant, recorda que aquí tens algú pensant en tu."
        },

        {
            date: "2026-08-18",
            text:
                "No cal que passi res extraordinari. A vegades, pensar en tu ja converteix un moment normal en alguna cosa especial."
        },

        {
            date: "2026-08-19",
            text:
                "Demà acaba una part del teu viatge. Tinc moltes ganes de saber què has vist, què has sentit i què guardaràs per sempre."
        },

        {
            date: "2026-08-20",
            text:
                "Avui tornes de Londres. Encara no puc ser allà, però ja et sento una mica més a prop."
        },

        {
            date: "2026-08-21",
            text:
                "Ara ets tu qui espera. Prometo que cada dia que queda és un dia menys per tornar a nosaltres."
        },

        {
            date: "2026-08-22",
            text:
                "Quan et trobi a faltar avui, pensaré en el primer instant en què tornem a mirar-nos."
        },

        {
            date: "2026-08-23",
            text:
                "Hi ha abraçades que duren uns segons i d’altres que es comencen a preparar molts dies abans."
        },

        {
            date: "2026-08-24",
            text:
                "Ja falta menys d’una setmana. Comença aquell moment en què els dies semblen anar una mica més de pressa."
        },

        {
            date: "2026-08-25",
            text:
                "No sé exactament com serà el moment de tornar-nos a veure, però sé que el recordaré."
        },

        {
            date: "2026-08-26",
            text:
                "Queden molt pocs dies. Les ganes de tornar ja ocupen més espai que la distància."
        },

        {
            date: "2026-08-27",
            text:
                "Avui el compte enrere ja sembla de veritat. Tres dies poden ser molt poc quan al final hi ets tu."
        },

        {
            date: "2026-08-28",
            text:
                "Només dos dies. Ja gairebé puc imaginar la teva cara quan ens tornem a veure."
        },

        {
            date: "2026-08-29",
            text:
                "Demà. Una paraula molt petita per a totes les ganes que tinc de tornar-te a abraçar."
        },

        {
            date: "2026-08-30",
            text:
                "El compte enrere s’ha acabat. Avui ja no toca imaginar-nos junts. Avui toca tornar-hi."
        }

    ],


    /* =====================================================
       MENSAJES ALTERNATIVOS

       Se utilizan antes del 3 de agosto, después del 30
       o cuando no existe un mensaje para una fecha.
       ===================================================== */

    fallbackMessages: [
        "Encara que avui estiguem lluny, hi ha una part de mi que continua al teu costat.",

        "La distància només fa més evidents les ganes que tinc de tornar-te a veure.",

        "Avui també he trobat un moment per pensar en tu.",

        "No importa on siguem. Hi ha coses que sempre ens mantenen a prop.",

        "Cada dia que passa és una petita passa més cap a tu.",

        "Et trobo a faltar, però m’encanta saber que tenim alguna cosa tan bonica per esperar.",

        "A vegades només cal pensar en una persona per sentir que el dia és una mica millor."
    ],


    /* =====================================================
       SORPRESAS

       Cada sorpresa contiene:
       - id: identificador único
       - number: número que aparece en pantalla
       - unlockDate: día en que se desbloquea
       - title: título
       - description: descripción
       - pdf: ruta del archivo PDF
       - buttonText: texto del botón
       ===================================================== */

    surprises: [

        {
            id: "surprise-01",

            number: "01",

            unlockDate: "2026-08-03",

            displayDate: "3 d’agost",

            title: "Una carta per començar",

            description:
                "Unes paraules per al primer dia que estiguem lluny.",

            featuredDescription:
                "Hi ha coses que es diuen millor quan s’escriuen amb calma.",

            pdf: "pdf/sorpresa-01.pdf",

            buttonText: "Llegir la carta"
        },

        {
            id: "surprise-02",

            number: "02",

            unlockDate: "2026-08-06",

            displayDate: "6 d’agost",

            title: "Un dia molt especial",

            description:
                "Una sorpresa preparada per a un dia que aquest any també té una mica de tu.",

            featuredDescription:
                "Avui és un dia especial i volia compartir-ne una part amb tu.",

            pdf: "pdf/sorpresa-02.pdf",

            buttonText: "Obrir la sorpresa"
        },

        {
            id: "surprise-03",

            number: "03",

            unlockDate: "2026-08-10",

            displayDate: "10 d’agost",

            title: "Per sentir-nos més a prop",

            description:
                "Una petita cosa per als dies que ens trobem a faltar.",

            featuredDescription:
                "Per als moments en què la distància sembli una mica més gran.",

            pdf: "pdf/sorpresa-03.pdf",

            buttonText: "Descobrir-la"
        },

        {
            id: "surprise-04",

            number: "04",

            unlockDate: "2026-08-20",

            displayDate: "20 d’agost",

            title: "Ja queda menys",

            description:
                "Una sorpresa per recordar tot el que ens espera.",

            featuredDescription:
                "Una etapa del viatge acaba i el retrobament és cada vegada més a prop.",

            pdf: "pdf/sorpresa-04.pdf",

            buttonText: "Obrir la sorpresa"
        },

        {
            id: "surprise-05",

            number: "05",

            unlockDate: "2026-08-29",

            displayDate: "29 d’agost",

            title: "Tornem a nosaltres",

            description:
                "L’última sorpresa abans de tornar-nos a trobar.",

            featuredDescription:
                "El compte enrere s’ha acabat. Aquesta última sorpresa és per a nosaltres.",

            pdf: "pdf/sorpresa-05.pdf",

            buttonText: "Obrir l’última sorpresa"
        }

    ],


    /* =====================================================
       TEXTOS DE ESTADO
       ===================================================== */

    texts: {

        today: "Avui",

        featuredAvailable: "Disponible avui",

        latestAvailable: "Ja disponible",

        locked: "Tancada",

        opened: "Oberta",

        surprisePrefix: "Sorpresa",

        openSurprise: "Obrir la sorpresa",

        noSurpriseAvailable:
            "La primera sorpresa encara no està disponible.",

        modal: {
            eyebrow: "Encara no",

            title: "Aquesta sorpresa està tancada",

            description:
                "Hauràs d’esperar una mica més per descobrir-la.",

            button: "Esperaré amb paciència"
        }

    }

};