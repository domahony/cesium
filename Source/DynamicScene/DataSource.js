/*global define*/
define([
        '../Core/DeveloperError'
    ], function(
        DeveloperError) {
    "use strict";

    /**
     * Defines the interface for data sources, which turn arbitrary data into a
     * {@link DynamicObjectCollection} for generic consumption. This object is an interface
     * for documentation purposes and is not intended to be instantiated directly.
     * @alias DataSource
     * @constructor
     */
    var DataSource = function() {
        DeveloperError.throwInstantiationError();
    };

    /**
     * Gets an event that will be raised when non-time-varying data changes, such
     * as the return value of getName, getClock, or getIsTimeVarying.
     * @memberof DataSource
     * @function
     *
     * @returns {Event} The event.
     */
    DataSource.prototype.getChangedEvent = DeveloperError.throwInstantiationError;

    /**
     * Gets an event that will be raised if an error is encountered during processing.
     * @memberof DataSource
     * @function
     *
     * @returns {Event} The event.
     */
    DataSource.prototype.getErrorEvent = DeveloperError.throwInstantiationError;

    /**
     * Gets the DynamicObjectCollection generated by this data source.
     * @memberof DataSource
     * @function
     *
     * @returns {DynamicObjectCollection} The collection of objects generated by this data source.
     */
    DataSource.prototype.getDynamicObjectCollection = DeveloperError.throwInstantiationError;

    /**
     * Gets the name of this data source.  If the return value of
     * this function changes, the changed event will be raised.
     * @memberof DataSource
     *
     * @returns {String} The name.
     */
    DataSource.prototype.getName = DeveloperError.throwInstantiationError;

    /**
     * Gets the top level clock associated with this data source, or undefined if no clock exists.
     * If the return value of this function changes, the changed event will be raised.
     * @memberof DataSource
     * @function
     *
     * @returns {DynamicClock} The clock associated with this data source, or undefined if none exists.
     */
    DataSource.prototype.getClock = DeveloperError.throwInstantiationError;

    /**
     * Gets a value indicating if the data varies with simulation time.  If the return value of
     * this function changes, the changed event will be raised.
     * @memberof DataSource
     * @function
     *
     * @returns {Boolean} True if the data is varies with simulation time, false otherwise.
     */
    DataSource.prototype.getIsTimeVarying = DeveloperError.throwInstantiationError;

    /**
     * Gets a value indicating if this data source is actively loading data.  If the return value of
     * this function changes, the loading event will be raised.
     * @memberof DataSource
     * @function
     *
     * @returns {Boolean} True if this data source is actively loading data, false otherwise.
     */
    DataSource.prototype.getIsLoading = DeveloperError.throwInstantiationError;

    /**
     * Gets an event that will be raised when the data source either starts or stops loading.
     * @memberof DataSource
     * @function
     *
     * @returns {Event} The event.
     */
    DataSource.prototype.getLoadingEvent = DeveloperError.throwInstantiationError;

    /**
     * Updates the data source to the provided time.
     * @memberof DataSource
     * @function
     *
     * @param {JulianDate} time The simulation time.
     *
     * @returns {Boolean} True if this data source is ready to be displayed at the provided time, false otherwise.
     */
    DataSource.prototype.update = DeveloperError.throwInstantiationError;

    return DataSource;
});