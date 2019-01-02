import basePage from '../Pages/basePage';

class apfmhomePage extends basePage {

    open() {
        super.open('/home-page-step-2');

    }

//elements on homepage

//get () { return $(' ');}
//first leadform
get  entercityorpostalcode() { return $('#cta-search-field');}

get startyoursearchButton () { return $('//html[1]/body[1]/div[1]/div[1]/section[1]/div[2]/div[1]/form[1]/button'); }
// homepagestep2 lead form

get fullname () { return $('#leadFormFullname ');}

get email () { return $('#leadFormEmail');}

get phone () { return $('#leadFormPhone');}

get cityorpostalcode () { return $('#inputLocation-field ');}

get startmysearchButton () { return $('//*[@id="DestinationPageForm"]/button ');}



}

export default new apfmhomePage();