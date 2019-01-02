
import basePage from '../Pages/basePage' ;

class listdotPage extends basePage
{
    open()
    {
        super.open('https://list.aplaceformom.com');

    }
//elements on listdot homepage
    get location() { return $('#inputLocation'); }

    get continueButton () {  return $('.form-submit-btn')}

//elements on list dot 2ndlead form
 get fullname() { return $('#leadFormFullname');}
 get email() { return $('#leadFormEmailAddress');}
 get phone () { return $('#leadFormPhone');}
 get unlockresultsButton () { return $('#submit-btn');}

 //thankyoupage elements
 get showmemylistings () {return $('=Show me my listings') ;}
//for new thank you
 get showmemylistingsnew () {return $('=View My Listings') ;}


}

export default new listdotPage();