function verifie()
              { 
              

              var reEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm

              if  (document.f1.name.value ==="") { alert('Le champ Nom est vide ! \n Remplir votre Nom'); document.getElementById('l-name').innerText="** champ obligatoire"; return false; }
                
              else if (document.f1.email.value ==="")  { alert('Le champ E-mail est vide ! \n Remplir votre E-mail'); document.getElementById('l-email').innerText="** champ obligatoire";  return false;}
             
              else if (reEmail.test(document.f1.email.value)===false)
               { alert ('Invalid @ mail !: '); document.getElementById('l-email').innerText="** Invalid E-mail adress"; return false; }
              
              else if  (document.f1.tel.value ==="") { alert('Le champ tel est vide ! \n Remplir votre tel'); document.getElementById('l-tel').innerText="** champ obligatoire"; return false; }
              else if  (document.f1.date1.value ==="") { alert('Le champ date est vide ! \n Remplir votre date de depart'); document.getElementById('l-date1').innerText="** champ obligatoire"; return false; }
              else if  (document.f1.date2.value ==="") { alert('Le champ date est vide ! \n Remplir votre date de depart'); document.getElementById('l-date2').innerText="** champ obligatoire"; return false; }

            
               else {  alert('formulaire envoyé'); return true; }


              }
              
 function efface()
               {
                  
                  document.f1.name.value ===' '
                  document.getElementById('l-name').innerText=" "

                  document.f1.adress.value ===' '
                  document.getElementById('l-adress').innerText=' '


                  document.f1.password.value ===' '
                  document.getElementById('l-password').innerText=' '

                  document.f1.email.value ===' ' 
                  document.getElementById('l-email').innerText=' '


                  document.f1.confirm.value ===' ' 
                  document.getElementById('l-confirm').innerText=' '

              }

function recu() {
    var reEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm

    if  (document.f1.name.value ==="") { alert('Le champ Nom est vide ! \n Remplir votre Nom'); document.getElementById('l-name').innerText="** champ obligatoire"; return false; }
      
    else if (document.f1.email.value ==="")  { alert('Le champ E-mail est vide ! \n Remplir votre E-mail'); document.getElementById('l-email').innerText="** champ obligatoire";  return false;}
   
    else if (reEmail.test(document.f1.email.value)===false)
     { alert ('Invalid @ mail !: '); document.getElementById('l-email').innerText="** Invalid E-mail adress"; return false; }
    
    else if  (document.f1.tel.value ==="") { alert('Le champ tel est vide ! \n Remplir votre tel'); document.getElementById('l-tel').innerText="** champ obligatoire"; return false; }
    else if  (document.f1.date1.value ==="") { alert('Le champ date est vide ! \n Remplir votre date de depart'); document.getElementById('l-date1').innerText="** champ obligatoire"; return false; }
    else if  (document.f1.date2.value ==="") { alert('Le champ date est vide ! \n Remplir votre date de depart'); document.getElementById('l-date2').innerText="** champ obligatoire"; return false; }

  
     else {

    var name=document.getElementById('name').value 
    var tel=document.getElementById('tel').value 
    var email=document.getElementById('email').value 
    var d1=document.getElementById('date1').value    
    var d2=document.getElementById('date2').value    
    var nchambre=document.getElementById('chambre').options[document.getElementById('chambre').selectedIndex].value
    var nadulte= document.getElementById('adulte').options[document.getElementById('adulte').selectedIndex].value
    var nenfants = document.getElementById('enfant').options[document.getElementById('enfant').selectedIndex].value
    var logement =document.getElementById('logement').options[document.getElementById('logement').selectedIndex].value


   /* var newDiv = document.createElement("div") 

    newDiv.id="div1"
    newDiv.class="border-info"
    newDiv.innerText="bonjour tout le monde "
    var currentDiv = document.getElementById("fc"); 
    document.getElementById('div2').insertBefore(newDiv, currentDiv); */



     let log
     switch(logement){
        case 'DC' : log=140; break;
        case 'DP'  : log=180; break;
        case  'LPD'  : log=120; break;
        case 'ALL IN SOFT':log=190;break;
        default: log=0;    }

        let day2=d2.substring(8)
        let day1=d1.substring(8)
        let day=day2-day1
        let price1=nchambre*80+40*nenfants+nadulte*20+log
        let price2

        if(day>0){ price2=price1*day}
        else { price2=price1}

    document.getElementById('result').innerHTML=" <p> Mme\/Mr : "+ name +"</p> <p> Le prix du "+ day + "jours" +" a l\'hotel <b> Chichkan</b> </p><p> Du<span style='color:red'> "+d1+"</span> AU <span style='color:red'>"+d2+
    "</span> est " +price2+"</p>"+"<p> Pour <span style='color:red'>  "+ nadulte +"</span> adultes et<span style='color:red'>  "+nenfants+" </span> enfants</p><p> <input type='button' onclick='reserver()' id='btnreserver' value='reserver' class='btn btn-info btn-block'> </p>"

    document.getElementById('result').classList.add('autre')
     
     }     
}              
   

function reserver() 
{
    alert('votre reservation est prise')
}
