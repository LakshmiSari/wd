import basePage from '../Pages/basePage';


class destinationPage extends basePage {
    open() {
        super.open('/assisted-living/washington/bellevue');

    }

    //elements on destinationpage

    //community cards

    get communityresultslist() {
        return $('#DestinationResultsList');
    }

    //1st community card
    get firstCommunityCard() {


     var   one = $('//ul[@id="DestinationResultsList"]//li[1]/a');
      return one;
    }
}
    export default new destinationPage();