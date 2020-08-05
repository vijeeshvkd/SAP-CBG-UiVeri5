const wait = require('./Tools/baseWait.js')
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
        })).click();
        element(by.control({
            controlType: "sap.m.Title",
            properties: [{ text: "Blank Campaign" }]
        })).click();
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
            properties: [{ selected: true }]
        })).click();
        element(by.control({
            id: /create_campaign_form_fragment--TargetGroup-vhi$/
        })).click();
        element(by.control({
            controlType: "sap.m.Button",
            properties: [{ text: "My Target Groups" }]
        })).click();
        element(by.control({
            controlType: "sap.ui.table.Table"
        })).element(by.control({
            controlType: "sap.ui.table.Row",
            bindingPath: { path: "/TargetGroupSet('0000184424')" },
        })).click();

        // Create Campaign button press
        element(by.control({ id: /btn_template_create$/ })).click();


    })
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

    })
    // it("should load the campain ID CRC 22062020", () => {
    //     element(by.control( { 
    //         controlType : "sap.m.Button", 
    //         properties:[{ 
    //             text : "My Campaigns" 
    //         }] 
    //     })).click();
    //     var link = element(by.control( { 
    //         controlType : "sap.m.Link", 
    //         properties:[{ 
    //             text : "CRC 22062020" 
    //         }] 
    //     }));
    //     link.click().then(wait.long) 
    // }) 
})