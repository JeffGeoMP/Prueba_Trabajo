
/**
 * Estructuras para mantener la informacion
 */
let Credentials = new Map();
let Messages = new Map();

/**
 * Añade las Credenciales al Map si no existe
 * 
 */
function AddCredential(Key, Shared_Secret) {
    if(!Credentials.has(Key)){
        Credentials.set(Key, Shared_Secret);
        return true;
    }else{
        return false;
    }
}

/**
 * 
 * Añade un Mensaje con su respectivo tag
 * 
 */
function AddMessage(Message, Tags){
    let Id = "MSG-"+ new Date().getTime();
    let Data = {
        Message: Message,
        Tag: Tags
    }
    Messages.set(Id, Data);
    return Id;
}

/***
 * 
 * Busca un Mensaje por Id
 * 
 */

function SearchMessage(Id) {
    if(Messages.has(Id)){
        return Messages.get(Id).Message
    }else{
        return ""
    }
}

/**
 * 
 * Busca Mensajes por sus tags
 * 
 */

function SearchTags(Tag) {
    let MessagesTag = [];
    Messages.forEach((data, key) =>{
        console.log(key);
        if(data.Tag == Tag){
            MessagesTag.push({Id: key, Message: data.Message, Tag: data.Tag});
        }
    });
    return MessagesTag;
}


module.exports = {AddCredential, AddMessage, SearchMessage, SearchTags}