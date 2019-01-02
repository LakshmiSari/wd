import basePage from '../Pages/basePage';

class thankyouPage extends basePage {

    open() {
        super.open('/home/thank-you');

    }

    //thankyoupage elements
 get showmemylistings () {return $('=Show me my listings') ;}
 //for new thank you
  //get showmemylistings () {return $('=View My Listings') ;}
 

}
export default new thankyouPage();