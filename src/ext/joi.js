var Joi = require('joi');
var Vixin = require('../index');

/**
 * A validator which uses our boilerplate
 * with hapijs/joi
 *
 * @usage
 *
 * // https://github.com/hapijs/joi
 * var rules = { .. }
 * React.createClass({
 *   mixins: [Vixin(rules)]
 * });
 *
 * @param {Object} rules Rules to be provided to the mixin
 * @return {Object} Our mixin with Joi as validator
 */
module.exports = function(rules) {
  return mixin(rules, function(data) {
    Joi.validate(data, rules, function(err, value) {
      // Joi states that when err is null,
      // then the object is valid.
      this.setState({ errors: err == null ? {} : err })
    }.bind(this));
  });
}