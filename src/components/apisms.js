import React from 'react'

const apisms = () => {
    var request = new XMLHttpRequest();

    request.open('POST', 'https://api.nvoip.com.br/v2/sms');

    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', 'Bearer access_token');

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
        }
    };

    var body = {
        'numberPhone': 'número que irá receber o SMS',
        'message': 'mensagem que será enviada',
        'flashSms': false
    };

    request.send(JSON.stringify(body));
    return (
        <div>apisms</div>
    )
}

export default apisms