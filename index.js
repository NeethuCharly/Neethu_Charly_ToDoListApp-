const flag={
    unameflag:true,
    passwordflag:true

}
const validate=(el,value)=>{
    let flagName=el+"flag";
    if($(`#${el}`).val()===value){
        flag[flagName]=false;
        const msg='';
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).addClass('hidden');
    }
    else{
        flag[flagName]=true;
        const msg=`Invalid  ${el} `;
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).removeClass('hidden');
       
    }

}

$('#uname').on('input',(e)=>{validate('uname','admin')});
$('#password').on('input',(e)=>{validate('password','12345')});

const redirectAndAuthenticate=()=>{
    window.localStorage.setItem('user',JSON.stringify({uname:'admin'}));
    window.location='home.html';
}
const loginAction=(e,callback)=>{
    if(!flag['unameflag'] && !flag['passwordflag']){
        e.preventDefault();
        callback();
    }
}
$('#login').on('click',(e)=>{
    loginAction(e,redirectAndAuthenticate);
}

) 