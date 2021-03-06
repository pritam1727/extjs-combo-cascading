﻿Ext.application({
    name: 'App',
    models: ['AutomobileLine','Automobile'],
    stores: ['AutomobileLines', 'Automobiles'],
    views: ['Viewport'],
    autoCreateViewport: true,
    config: {
        refs: {
            autosCombo: '#autos-combo'
        },
        control: {
            '#lines-combo': {
                select: 'onAutomobileLinesComboSelect'
            }
        }
    },
    onAutomobileLinesComboSelect: function (cmb, records, options) {
        var autosCbx = this.getAutosCombo(),
            autosStore = autosCbx.getStore();

        autosCbx.clearValue();
        autosStore.clearFilter();
        autosStore.filterBy(function (item) {
            return item.get('automobileLineId') === records[0].get('id');
        })
        autosCbx.enable();
    },
    launch: function () {
    }
});