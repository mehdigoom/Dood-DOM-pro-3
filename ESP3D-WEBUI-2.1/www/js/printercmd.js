function SendPrinterCommand(cmd, echo_on, processfn, errorfn, id, max_id) {
    var url = "/command?commandText=";
    var push_cmd = true;
    if (typeof echo_on !== 'undefined') {
        push_cmd = echo_on;
    }
    if (cmd.trim().length == 0) return;
    if (push_cmd) Monitor_output_Update("[#]" + cmd + "\n");
    //removeIf(production)
    console.log(cmd);
    if (typeof processfn !== 'undefined') processfn("Test response");
    else SendPrinterCommandSuccess("Test response");
    return;
    //endRemoveIf(production)
    if (typeof processfn === 'undefined' || processfn == null) processfn = SendPrinterCommandSuccess;
    if (typeof errorfn === 'undefined' || errorfn == null) errorfn = SendPrinterCommandFailed;
    cmd = encodeURI(cmd);
    cmd = cmd.replace("#", "%23");
    SendGetHttp(url + cmd, processfn, errorfn, id, max_id);
    //console.log(cmd);
}

function SendPrinterSilentCommand(cmd, processfn, errorfn, id, max_id) {
    var url = "/command_silent?commandText=";
    if (cmd.trim().length == 0) return;
    //removeIf(production)
    console.log(cmd);
    if (typeof processfn !== 'undefined') processfn("Test response");
    else SendPrinterCommandSuccess("Test response");
    return;
    //endRemoveIf(production)
    if (typeof processfn === 'undefined' || processfn == null) processfn = SendPrinterSilentCommandSuccess;
    if (typeof errorfn === 'undefined' || errorfn == null) errorfn = SendPrinterCommandFailed;
    cmd = encodeURI(cmd);
    cmd = cmd.replace("#", "%23");
    SendGetHttp(url + cmd, processfn, errorfn, id, max_id);
    //console.log(cmd);
}

function SendPrinterSilentCommandSuccess(response) {
    //console.log(response);
}


function SendPrinterCommandSuccess(response) {
    if ((target_firmware == "grbl") || (target_firmware == "grbl-embedded")) return;
    if (response[response.length - 1] != '\n') Monitor_output_Update(response + "\n");
    else Monitor_output_Update(response);
}

function SendPrinterCommandFailed(error_code, response) {
    if (error_code == 0) {
        Monitor_output_Update(translate_text_item("Connection error") + "\n");
    } else {
         Monitor_output_Update(translate_text_item("Error : ") + error_code + " :" + decode_entitie(response) + "\n");
    }
    console.log("printer cmd Error " + error_code + " :" + decode_entitie(response));
}
// Costom functions
function GetModels(){
    fetch('http://public.valjang.fr/Apipro3.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      // Work with JSON data here
      console.log(data)
      return(data.Lien)
    })
    .catch(err => {
      alert(err)
    })
}
function getGcode(Fichierbrute,step){
    var fso=new ActiveXObject("Scripting.FileSystemObject"); 
    var file=fso.OpenTextFile(Fichierbrute, 1 ,true);
    var line=fso.ReadLine(step);
  
    file.Close();
    return(line)
}


function pritGcode(Gcode){
SendPrinterCommand(gcode,true)

}