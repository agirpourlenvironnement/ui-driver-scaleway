/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/node-driver/driver-%%DRIVERNAME%%/component', ['exports', 'ember', 'shared/components/node-driver/driver-%%DRIVERNAME%%/component'], function (exports, _ember, _component) {
  exports['default'] = _component['default'];
});

define('shared/components/node-driver/driver-%%DRIVERNAME%%/component', ['exports', 'ember', 'shared/mixins/node-driver', 'shared/components/node-driver/driver-%%DRIVERNAME%%/template'], function (exports, _ember, _uiMixinsDriver, _template) {
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
    driverName: '%%DRIVERNAME%%',
    config: alias('model.%%DRIVERNAME%%Config'),
/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = get(this, 'globalStore').createRecord({
        type: '%%DRIVERNAME%%Config',
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

      set(this, 'model.%%DRIVERNAME%%Config', config);
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
