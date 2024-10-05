
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
    primaryColor: "white", 
    accentColor: "#F8F8F8",  
    tertiaryColor: "white" ,
    textColor: "black" 
};

const theme4 = {
    primaryColor: "#222222", 
    accentColor: "orange",  
    tertiaryColor: "#453643",
    textColor: "white" 
};

const theme3 = {
    primaryColor : "white",
    accentColor : "#C0E8F9",
    tertiaryColor: "#BFD5E2",
    textColor: "#000" 
}

const theme2 = {
    primaryColor : "#2B2B2B",
    accentColor : "#222222",
    tertiaryColor: "#434343",
    textColor: "white" 
}

const theme5 = {

    primaryColor : "#0B2027",
    accentColor : "#40798C",
    tertiaryColor: "#7D98A1",
    textColor: "white" 
}