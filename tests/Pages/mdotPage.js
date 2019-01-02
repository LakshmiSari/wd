import basePage from '../Pages/basePage';


class mdotPage extends basePage {

    open() {
        super.open('https://m.aplaceformom.com/');

    }

//get () { return $(' ');}

get citystateorpostalcode () { return $('#leadFormLocation');}

get nextButton1() { return $('//body[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/button[1]');}

get email () { return $('#leadFormEmail ');}

get nextButton2() { return $('//body[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[2]/div[2]/button[1] ');}

get fullname () { return $('#leadFormFullname ');}

get  phone () { return $('#leadFormPhone ');}

get getyourresultsButton () { return $(' #submit-btn');}





}


export default new mdotPage();