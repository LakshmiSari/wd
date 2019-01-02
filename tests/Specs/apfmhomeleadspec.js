import {
    expect
} from 'chai';

import destinationPage from '../Pages/destinationPage';
import communityPage from '../Pages/communityPage';
import thankyouPage from '../Pages/thankyouPage';
import apfmhomePage from '../Pages/apfmhomePage';

describe('Navigate to apfmhome', () => {

    it('assert title of apfm', () => {
        apfmhomePage.open();
        var title = browser.getTitle(); //Gets the title of apfm
        expect(title).to.equal('Senior Assisted Living Guides: Find Senior Care A Place for Mom') //Asserting title

    })

   /* it('submit the  first lead form in apfmhome', () => {
       // apfmhomePage.entercityorpostalcode.addValue("98002");
     //   apfmhomePage.startmysearchButton.click();

    }) */

    it('submit the homepagestep2 lead form ', () => {

        apfmhomePage.fullname.addValue("lakshmi");
        apfmhomePage.email.addValue("apfm@home.com");
        apfmhomePage.phone.addValue("7083452389");
        apfmhomePage.cityorpostalcode.addValue("98003");
        apfmhomePage.startmysearchButton.click();


    })

    it('asserting to thankyou page', () => {

        browser.pause(5000);
        var thankyouPageTitle = browser.getTitle();
        expect(thankyouPageTitle).to.equal('Senior Assisted Living Guides: Find Senior Care A Place for Mom');

        thankyouPage.showmemylistings.click();


    })



    it('Asserting the destination page', () => {
        var destinationlistPageTitle = browser.getTitle();
        expect(destinationlistPageTitle).to.equal('52 Assisted Living Facilities near Bellevue, WA| A Place For Mom');
    })

    it('Clicking on community card  and navigating', () => {

        destinationPage.firstCommunityCard.click();
    })


    it('asserting the community detail page title', () => {

        var communitydetailPageTitle = browser.getTitle();
        expect(communitydetailPageTitle).to.equal('Get Pricing for NC Adult Family Home at A Place for Mom');

    })

    it('validating the existance for phonenumber and review wrapper in detail screen', () => {
        // var phone = communityPage.phonenumberandreviewarea;
        //  phone.isDisplayed();

        communityPage.phonenumberandreviewarea.isDisplayed();




    })

    it('validating the existance for  community description', () => {
        communityPage.communityDescription.isDisplayed();
    })

    it('validating the existance for Pricing module ', () => {
            communityPage.pricingModule.isDisplayed();
        })

        /
        it('validating the existance for  care provided in the community', () => {
            communityPage.communityCareProvided.isDisplayed();
        })

    it('validating the existance for community review card ', () => {
        communityPage.communityReviewCard.isDisplayed();
    })

})