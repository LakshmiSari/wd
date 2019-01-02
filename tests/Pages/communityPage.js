import basePage from '../Pages/basePage';

class communityPage extends basePage {

    open() {
        super.open('/community/avendelle-assisted-living-royal-141526ington/bellevue');

    }

    //elements on destination page

    get phonenumberandreviewarea() {
        return $('//div[@class="contact-review-wrapper"]//div[@class="need-help"]');
    }

get communityDescription(){
    return $('.community-detail');
}

get pricingModule() {  return $('.Pricing-module');}



//get communityReviewCard() { return $('.community-review Card rounded').selectByVisibleText('Community Details at NC Adult Family Home');}

get communityReviewCard() { return $('//*[@id="CommunityContainer-react-component-e3d5d217-a846-4f89-b757-bdae7eb5a777"]/div/div[1]/div/div[1]/section[1]'); }

get communityCareProvided() { return $('//*[@id="CommunityContainer-react-component-e3d5d217-a846-4f89-b757-bdae7eb5a777"]/div/div[1]/div/div[1]/section[2]'); }


//get communityCareProvided() { return $('.community-review Card rounded').selectByVisibleText('Senior Housing Types Provided at NC Adult Family Home');}







}
export default new communityPage();