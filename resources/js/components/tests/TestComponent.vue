<template>
    <!--    <div class="d-flex" v-for="section in sections">
            <div class="w-50 p-2">
                &lt;!&ndash;    <div v-for="section in sections">
                        <h3>{{ section.title }}</h3>
                        <h4>Sections</h4>
                        <ul class="list-unstyled">
                            <li v-for="statement in section.statements">{{ statement.title }}</li>
                        </ul>
                    </div>&ndash;&gt;
                <div class="card w-75">
                    <div class="card-header">
                        <h3>{{ section.title }}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            <li v-for="statement in section.statements">
                                <div class="row mb-1 text-center">
                                    <div class="col-1">
                                        <button class="btn btn-primary" @click="addStatement(statement)">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                    </div>
                                    <div class="col-7">
                                        <div class="bg-primary rounded w-100 h-100">{{ statement.title }}</div>
                                    </div>
                                    <div class="col-2">
                                        <div class="bg-primary rounded w-100 h-100">
                                            {{ activeMap[statement.id] ? 'Yes' : 'No' }}
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="bg-primary rounded w-100 h-100">
                                            {{ activeMap[statement.id] ? 'Yes' : 'No' }}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-50 p-2">
                <div class="card w-75">
                    <div class="card-header">{{ section.title }}</div>
                    <div class="card-body">
                        <div class="" v-for="statement in statements">
                            <div class="row mb-1" @click="focusOnInput(statement)">
                                <div class="col-1">
                                    <button class="btn btn-danger" @click="removeStatement(statement.id)">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </div>
                                <div class="col-11 bg-primary">{{ statement.title }}</div>
                            </div>
                            <div class="row mb-1" v-show="statement.active">
                                <div class="col-12 mb-1">
                                    <textarea class="form-control" v-model="statement.dsc"
                                              @blur="updateStatement(statement)"></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary float-end" @click="updateStatement(statement)">Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
    <div class="uk-child-width-expand@m uk-text-center" uk-grid v-for="section in sections">
        <div>
            <div class="uk-card uk-card-default uk-card-body">
                <div class="uk-card-title uk-text-left">{{ section.translated_title }}</div>
                <hr class="uk-divider">
                <ul class="uk-list uk-list-divider">
                    <li v-for="statement in section.statements" class="statement">
<!--                        :class="!statement.active? ` uk-background-muted`: ` uk-background-secondary`"-->
                        <div class="d-flex justify-content-between align-items-center p-2">
                            <button class="uk-button uk-background-muted"
                                    @click="addStatement(statement)">
<!--                                    :class="!statement.active? ` uk-background-muted`: ` uk-background-secondary`"-->
                                <i class="fas fa-plus"></i>
                            </button>
                            <span>{{ statement.translated_title }}</span>
                            <span>{{ statement.active ? 'Not Active' : 'Not Active' }}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div class="uk-card uk-card-default uk-card-body">
                <div class="uk-card-title uk-text-left">{{ section.title }}</div>
                <hr class="uk-divider">
                <ul class="uk-list uk-list-divider">
                    <li v-for="statement in statements" class="">
                        <div
                            class="statement uk-background-muted d-flex justify-content-between align-items-center mb-1"
                            @click="focusOnInput(statement)">
                            <button class="uk-button uk-background-muted" @click="removeStatement(statement)">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span>{{ statement.title }}</span>
                            <span>{{ statement.active ? 'Not Active' : 'Not Active' }}</span>
                        </div>
                        <div class="" v-if="statement.active">
                            <textarea class="uk-textarea mb-1" @blur="updateStatement(statement)"
                                      v-model="statement.dsc"></textarea>
                            <button class="uk-button uk-button-primary uk-float-right"
                                    @click="updateStatement(statement)">Save
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {getRequest} from "../../api";
import {onBeforeMount, onMounted, ref} from "vue";

const currentInput = ref(null);

const sections = ref([]);

const statements = ref({});

const activeMap = ref({});

export default {
    name: "TestComponent",
    setup() {
        onBeforeMount(async () => {
            sections.value = await getRequest('en/getServiceSectionStatements/1', true);
        })

        const focusOnInput = (statement) => {
            statement.active = !statement.active;
            // currentInput.value.focus();
        }

        const addStatement = (statement) => {
            let temp = statements.value;

            if (temp[statement.id])
                return;

            statement.active = !statement.active;

            temp[statement.id] = {
                id: statement.id,
                title: statement.translated_title,
                dsc: statement.translated_dsc,
                active: !statement.active,
            };

            statements.value = temp;

            activeMap.value[statement.id] = true;
        }

        const updateStatement = (statement) => {
            statements.value[statement.id] = {
                id: statement.id,
                title: statement.title,
                dsc: statement.dsc,
                active: !statement.active,
            }
        }

        const removeStatement = (statement) => {
            statement.active = !statement.active;
            delete statements.value[statement.id];
        }

        return {
            sections,
            statements,
            activeMap,
            currentInput,
            addStatement,
            updateStatement,
            removeStatement,
            focusOnInput,
        }
    }
}
</script>

<style scoped>
/**{*/
/*    color: white;*/
/*}*/
.statement span {
    cursor: default;
}
</style>
