export default {
    template: `
    <div id="newObjectModal" class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div>
                    <div class="modal-footer">
                        <div class="container">
                            <div class="row">
                                <div class="col me-auto">
                                </div>    
                                <div>
                                    
                                    <button 
                                    type="button" 
                                    class="btn btn-success mx-2" 
                                    @click="$emit('save')">                                             Save              
                                    </button>

                                    <button 
                                    type="submit" 
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    emits: ['save']
}