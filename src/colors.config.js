
export default function chooseTheme(option){
    switch(option){
        case 1:
            return (theme1)
        case 2:
            return (theme2)
        case 3:
            return (theme3)
        case 4:
            return (theme4)
        case 5:
            return (theme5)
        default:
            return(theme1)
    }
}

const theme1 = {
    primaryColor: "f0f0f0", 
    accentColor: "#007bff",  
    tertiaryColor: "#EEEEEE" ,
    textColor: "white" 
};

const theme2 = {
    primaryColor: "#FFFFFF", 
    accentColor: "#E0E0E0",  
    tertiaryColor: "#000000",
    textColor: "#000" 
};

const theme3 = {
    primaryColor : "white",
    accentColor : "#C0E8F9",
    tertiaryColor: "#4B4E6D",
    textColor: "#000" 
}

const theme4 = {
    primaryColor : "#D1F0B1",
    accentColor : "#B6CB9E",
    tertiaryColor: "#92B4A7",
    textColor: "#000" 
}

const theme5 = {

    primaryColor : "#0B2027",
    accentColor : "#40798C",
    tertiaryColor: "#E6C79C",
    textColor: "#000" 
}