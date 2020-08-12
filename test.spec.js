const wait = require('./Tools/baseWait.js');
const canvasTargetSymbol = element(by.xpath('//*[@id="Galilei_TargetSymbol"]'))
const canvasActionSymbol = element(by.xpath('//*[@id="Galilei_ActionSymbol"]'))
const canvasActionSymbol02 = element(by.xpath('//*[@id="Galilei_ActionSymbol1"]'))
const canvasYesSymbol = element(by.xpath('//*[@id="Galilei_YesSymbol"]'))

const campaignsTile = element(by.control({
    controlType: 'sap.m.GenericTile',
    properties: { header: 'Campaigns' }
}))
describe('test', () => {
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
    it("should load the app", () => {
        campaignsTile.click().then(wait.long)
    })

    it("should create the email campaign", () => {
        element(by.control({
            id: "application-Initiative-manageCampaignFlow-component---worklist--Add",
            interaction: {
                idSuffix: 'BDI-content'
            }
        })).click().then(wait.long);
        element(by.control({
            controlType: "sap.m.Title",
            properties: [{ text: "Blank Campaign" }]
        })).click().then(wait.long);
        element(by.control({
            id: /create_campaign_form_fragment--campaignName$/,
            interaction: { idSuffix: "inner" }
        })).sendKeys('UIVeri5Test2');
        element(by.control({
            id: /create_campaign_form_fragment--cpgDesc-input$/,
            interaction: { idSuffix: "inner" }
        })).sendKeys('UIVeri5Test2');
        element(by.control({
            id: /create_campaign_form_fragment--TemplateDrop$/,
            interaction: { idSuffix: "arrow" }
        })).click();

        element(by.control({
            controlType: "sap.m.StandardListItem",
            properties: [{ title: "Email Campaign" }]
        })).click();

        element(by.control({
            id: "create_campaign_form_fragment--TargetGroup-vhi"
        })).click();
        element(by.control({
            controlType: "sap.m.Button",
            properties: [{
                text: "All Target Groups"
            }]
        })).click();
        element(by.control({
            controlType: "sap.m.SearchField",
            id: "__field0",
            properties: [{
                placeholder: "Search"
            }],
            interaction: { idSuffix: "I" }
        })).sendKeys('Change Running Campaign T');
        element(by.control({
            controlType: "sap.m.Link",
            properties: [{
                text: "Change Running Campaign T"
            }]
        })).click();
        element(by.control({
            id: "TGDetails--targetSelectButtonOnMember"
        })).click();
        element(by.control({
            id: "btn_template_create",
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click();

        // element(by.control({
        //     controlType: "sap.ui.table.Table"
        // })).element(by.control({
        //     controlType: "sap.ui.table.Row",
        //     interaction: { idSuffix: "col0" }
        // })).click();

        //Create Campaign button press
        // element(by.control({ id: /btn_template_create$/ })).click();
        element(by.control({
            id: "btn_template_create",
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click();
    });

    it("should fill the campain info details", () => {
        element(by.control({ id: /campaign_main_frag--dropDownBoxTimezone$/, interaction: { idSuffix: "arrow" } })).click();
        element(by.control({
            controlType: "sap.m.SelectList"
        })).element(by.control({
            controlType: "sap.ui.core.Item",
            properties: [{ key: "INDIA" }]
        })).click();
        element(by.control({
            controlType: "sap.m.RadioButton",
            properties: [{ groupName: "campaign_main_frag--durRBG", text: "Recurring" }]
        })).click();
        element(by.control({
            controlType: "sap.m.Link",
            properties: [{ text: "Set Recurrence" }]
        })).click();
        element(by.control({
            controlType: "sap.m.Button",
            properties: [{ text: "Apply" }]
        })).click();
    })
    it("should add nodes(actions/triggers) on galilei", () => {

        browser.actions().mouseDown(element(by.control({
            controlType: 'sap.m.StandardListItem',
            viewName: 'hpa.cei.campaign.view.Object',
            properties: { title: "SEND EMAIL" }
        }))).mouseMove(canvasTargetSymbol).mouseUp().perform();

    });

    it("should navigate to content studio and create email template", () => {

        //Navigate to content studio
        element(by.control({
            controlType: "sap.m.Button",
            viewName: "hpa.cei.campaign.view.Object",
            i18NText: {
                propertyName: "text",
                key: "BTN_CREATE"
            },
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click().then(wait.long);

        //Search a template
        element(by.control({
            id: "application-MarketingContent-showList-component---start--createTemplateSearchField",
            interaction: {
                idSuffix: "I"
            }
        })).click();

        element(by.control({
            id: "application-MarketingContent-showList-component---start--createTemplateSearchField",
            interaction: {
                idSuffix: "I"
            }
        })).sendKeys("test");

        element(by.control({
            id: "application-MarketingContent-showList-component---start--createTemplateSearchField",
            interaction: {
                idSuffix: "search"
            }
        })).click();

        element(by.control({
            controlType: "hpa.cei.cnt.reuse.lib.controls.core.PreviewLoader",
            viewName: "hpa.cei.cnt.lib.view.Start",
            ancestor: {
                controlType: "sap.m.CustomListItem",
                viewName: "hpa.cei.cnt.lib.view.Start",
                bindingPath: {
                    path: "/Templates('2390')"
                },
                ancestor: {
                    id: "application-MarketingContent-showList-component---start--createTemplateList"
                }
            }
        })).click();

        //Release Email tmplate
        element(by.control({
            id: "application-CampaignMessage-manage-component---object--ReleaseButton",
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click();

        element(by.control({
            controlType: "sap.m.Button",
            properties: {
                text: "Release"
            },
            ancestor: {
                controlType: "sap.m.Dialog",
                properties: {
                    title: "Confirm Release"
                }
            },
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click().then(wait.medium);

        // //Back to campaign
        element(by.control({
            id: "backBtn"
        })).click();

    });

    it("should start the campaign", () => {

        //Display mode
        element(by.control({
            id: "campaign_galilei--editAutomation",
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click();

        // // Check Consistency
        element(by.control({
            id: "campaign_galilei--checkConsistency-img"
        })).click();


        //Start Campaign
        element(by.control({
            id: "actionButtons--btn_start",
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click();

        element(by.control({
            controlType: "sap.m.Button",
            viewName: "hpa.cei.campaign.view.Object",
            properties: {
                text: "Yes"
            },
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click().then(wait.medium);


    });

    it("should edit running campaign and update and activate the new campaign", () => {
        //Edit Running campaign
        element(by.control({
            id: "campaign_galilei--editAutomation",
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click();

        element(by.control({
            controlType: "sap.m.Button",
            properties: {
                text: "Yes, Edit the Flow in Draft Mode"
            },
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click();


        // Select send email
        canvasActionSymbol02.click().then(wait.short);

        // Add Email Opened
        browser.actions().mouseDown(element(by.control({
            controlType: 'sap.m.StandardListItem',
            viewName: 'hpa.cei.campaign.view.Object',
            properties: { title: "EMAIL OPENED" }
        }))).mouseMove(canvasActionSymbol02).mouseUp().perform();


        //Add email to yes
        browser.actions().mouseDown(element(by.control({
            controlType: 'sap.m.StandardListItem',
            viewName: 'hpa.cei.campaign.view.Object',
            properties: { title: "SEND EMAIL" }
        }))).mouseMove(canvasYesSymbol).mouseUp().perform();

        //Navigate to content studio
        element(by.control({
            controlType: "sap.m.Button",
            viewName: "hpa.cei.campaign.view.Object",
            i18NText: {
                propertyName: "text",
                key: "BTN_CREATE"
            },
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click().then(wait.long);

        //Search a template
        element(by.control({
            id: "application-MarketingContent-showList-component---start--createTemplateSearchField",
            interaction: {
                idSuffix: "I"
            }
        })).click();

        element(by.control({
            id: "application-MarketingContent-showList-component---start--createTemplateSearchField",
            interaction: {
                idSuffix: "I"
            }
        })).sendKeys("test");

        element(by.control({
            id: "application-MarketingContent-showList-component---start--createTemplateSearchField",
            interaction: {
                idSuffix: "search"
            }
        })).click();

        element(by.control({
            controlType: "hpa.cei.cnt.reuse.lib.controls.core.PreviewLoader",
            viewName: "hpa.cei.cnt.lib.view.Start",
            ancestor: {
                controlType: "sap.m.CustomListItem",
                viewName: "hpa.cei.cnt.lib.view.Start",
                bindingPath: {
                    path: "/Templates('6215')"
                },
                ancestor: {
                    id: "application-MarketingContent-showList-component---start--createTemplateList"
                }
            }
        })).click();

        //Release Email tmplate
        element(by.control({
            id: "application-CampaignMessage-manage-component---object--ReleaseButton",
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click();

        element(by.control({
            controlType: "sap.m.Button",
            properties: {
                text: "Release"
            },
            ancestor: {
                controlType: "sap.m.Dialog",
                properties: {
                    title: "Confirm Release"
                }
            },
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click().then(wait.medium);

        // //Back to campaign
        element(by.control({
            id: "backBtn"
        })).click();

        // Click Done
        element(by.control({
            id: "campaign_galilei--editAutomation",
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click();

        //Active copy
        element(by.control({
            controlType: "sap.m.Button",
            viewName: "hpa.cei.campaign.view.Object",
            properties: {
                text: "Active Copy"
            }
        })).click();

        //Manage Draft
        element(by.control({
            id: "actionButtons--btn_manageDraft",
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click();

        element(by.control({
            id: /ManageDraftButtonDropDown--idForActivateDraft$/
        })).click();

        element(by.control({
            controlType: "sap.m.Button",
            properties: [{ text: "Yes" }]
        })).click();

        element(by.control({
            id: "application-Initiative-manageCampaignFlow-component---object--designer_panel"
        })).click();

    })
})