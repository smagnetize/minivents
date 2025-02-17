/**
 * Interface for objects with event handling capabilities
 */
interface EventEmitter {
    /**
     * Listen to events.
     *
     * @param type Event type
     * @param func Callback function
     * @param ctx Context for the callback
     */
    on(type: string, func: Function, ctx?: any): this;

    /**
     * Stop listening to event / specific callback.
     *
     * @param type Event type (optional - if not provided, removes all events)
     * @param func Specific callback to remove (optional)
     */
    off(type?: string, func?: Function): this;

    /**
     * Send event, callbacks will be triggered.
     *
     * @param type Event type
     * @param args Additional arguments to pass to callbacks
     */
    emit(type: string, ...args: any[]): this;
}

/**
 * Add event handling capabilities to an object.
 *
 * @param target Object to add event handling to (optional - defaults to this)
 */
declare function Events<T extends object = {}>(target?: T): T & EventEmitter;

export = Events;
