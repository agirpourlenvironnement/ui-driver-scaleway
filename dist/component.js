/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/node-driver/driver-scaleway/component', ['exports', 'ember', 'shared/components/node-driver/driver-scaleway/component'], function (exports, _ember, _component) {
  exports['default'] = _component['default'];
});

define('shared/components/node-driver/driver-scaleway/component', ['exports', 'ember', 'shared/mixins/node-driver', 'shared/components/node-driver/driver-scaleway/template'], function (exports, _ember, _uiMixinsDriver, _template) {
/* ^--- And here */

  // You can put embmer object here
  var computed = Ember.computed;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;

/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    layout: _template.default,
    driverName: 'scaleway',
    config: alias('model.scalewayConfig'),
/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = get(this, 'globalStore').createRecord({
        type: 'scalewayConfig',
        commercialType: 'VC1S',
        region: '',
        name: '',
        debug: false,
        image: 'ubuntu-xenial',
        ip: '',
        ipv6: false,
        organization: '',
        token: '',
        volumes: ''
      });
      let type = 'host';

      if (!this.get('useHost')) {
        type = 'machine';
      }

      set(this, 'model.scalewayConfig', config);
    },

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = get(this, 'errors')||[];
      
      if (!get(this, 'model.commercialType') ) {
        errors.push('Specifying a Instance Type is required');
      }

      if (!get('model.organization') ) {
        errors.push('Specifying a Organization is required');
      }

      if (!get('model.token') ) {
        errors.push('Specifying a Token is required');
      }

      if (!get('model.image') ) {
        errors.push('Specifying a Image is required');
      }

      // Set the array of errors for display,
      // and return true if saving should continue.
      if ( get(errors, 'length') )
      {
        set(this, 'errors', errors);
        return false;
      }
      else
      {
        set(this, 'errors', null);
        return true;
      }
    },

    // Any computed properties or custom logic can go here
  });
});
;
define("shared/components/node-driver/driver-scaleway/template",["exports"],function(exports){

exports["default"] = Ember.HTMLBars.template({"id":"g/or88sR","block":"{\"symbols\":[\"al\",\"expandFn\"],\"statements\":[[6,\"section\"],[10,\"class\",\"horizontal-form\"],[8],[0,\"\\n\"],[4,\"accordion-list\",null,[[\"showExpandAll\"],[false]],{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"over-hr mb-20\"],[8],[6,\"span\"],[8],[1,[20,\"driverOptionsTitle\"],false],[9],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"row box mt-20\"],[8],[0,\"\\n      \"],[6,\"h4\"],[8],[0,\"API Access\"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-2 col-inline\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[0,\"Organization\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \\n        \"],[6,\"div\"],[10,\"class\",\"col span-4\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Scaleway Organization ID\",[22,[\"config\",\"organization\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"col span-2 col-inline\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[0,\"Token\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-4\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"input-group\"],[8],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Scaleway API Token\",[22,[\"config\",\"token\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \\n    \"],[6,\"div\"],[10,\"class\",\"row box mt-20\"],[8],[0,\"\\n      \"],[6,\"h4\"],[8],[0,\"Instance Options\"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-2 col-inline\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[0,\"Instance Name\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"col span-4\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Optionally specify the instance name\",[22,[\"config\",\"name\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"col span-2 col-inline\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[0,\"Region\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-4\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"input-group\"],[8],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Specify the location (par1,ams1)\",[22,[\"config\",\"region\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-2 col-inline\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[0,\"Image\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"col span-4\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Specify the image\",[22,[\"config\",\"image\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"col span-2 col-inline\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[0,\"Type\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-4\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"input-group\"],[8],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Specify the commercial type\",[22,[\"config\",\"commercialType\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-2 col-inline\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[0,\"Additional Volumes\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"col span-4\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Attach additional volume (e.g., 50G)\",[22,[\"config\",\"volumes\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \\n    \"],[6,\"div\"],[10,\"class\",\"row box mt-20\"],[8],[0,\"\\n      \"],[6,\"h4\"],[8],[0,\"Network\"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-2 col-inline\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[0,\"IP Address\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"col span-4\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Optionally specify the IP Address\",[22,[\"config\",\"ip\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"col span-2 col-inline\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[0,\"IPv6\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-4\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"input-group\"],[8],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[22,[\"config\",\"ipv6\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \\n    \"],[6,\"div\"],[10,\"class\",\"row box mt-20\"],[8],[0,\"\\n      \"],[6,\"h4\"],[8],[0,\"Debug\"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-2 col-inline\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[0,\"Enable Debugging\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"col span-4\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[22,[\"config\",\"debug\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[0,\"    \"],[6,\"div\"],[10,\"class\",\"over-hr\"],[8],[6,\"span\"],[8],[1,[20,\"templateOptionsTitle\"],false],[9],[9],[0,\"\\n\\n    \"],[1,[26,\"form-name-description\",null,[[\"model\",\"nameRequired\"],[[22,[\"model\"]],true]]],false],[0,\"\\n\\n    \"],[1,[26,\"form-user-labels\",null,[[\"initialLabels\",\"setLabels\",\"expandAll\",\"expand\"],[[22,[\"labelResource\",\"labels\"]],[26,\"action\",[[21,0,[]],\"setLabels\"],null],[22,[\"expandAll\"]],[26,\"action\",[[21,0,[]],[21,2,[]]],null]]]],false],[0,\"\\n\\n    \"],[1,[26,\"form-engine-opts\",null,[[\"machine\",\"showEngineUrl\"],[[22,[\"model\"]],[22,[\"showEngineUrl\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"\\n\"],[0,\"  \"],[1,[26,\"top-errors\",null,[[\"errors\"],[[22,[\"errors\"]]]]],false],[0,\"\\n\\n\"],[0,\"  \"],[1,[26,\"save-cancel\",null,[[\"save\",\"cancel\"],[\"save\",\"cancel\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}","meta":{}});;

});
