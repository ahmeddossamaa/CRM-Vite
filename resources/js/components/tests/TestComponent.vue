<template>
<div class="d-flex" v-for="section in sections">
    <div class="w-50 p-2">
        <!--    <div v-for="section in sections">
                <h3>{{ section.title }}</h3>
                <h4>Sections</h4>
                <ul class="list-unstyled">
                    <li v-for="statement in section.statements">{{ statement.title }}</li>
                </ul>
            </div>-->
        <div class="card w-75">
            <div class="card-header">
                <h3>{{ section.title }}</h3>
            </div>
            <div class="card-body">
                <ul class="list-unstyled">
                    <li v-for="statement in section.statements">
                        <div class="d-flex justify-content-start mb-1">
                            <button class="btn btn-primary me-1" @click="addStatement(statement)">
                                <i class="fas fa-plus"></i>
                            </button>
                            <span class="w-50 btn btn-primary me-1">{{ statement.title }}</span>
                            <span class="w-25 btn btn-primary">{{ activeMap[statement.id]? 'Yes': 'No' }}</span>
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
                    <div class="row" v-if="!statement.active" @click="statement.active = !statement.active">
                        <div class="col-1">
                            <button class="btn btn-danger" @click="removeStatement(statement.id)">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                        <div class="col-11 bg-primary">{{ statement.title }}</div>
                    </div>
                    <div class="row" v-else>
                        <div class="col-12">
                            <input type="text" class="form-control" v-model="statement.title" @blur="updateStatement(statement)"/>
                        </div>
<!--                        <div class="col-4">-->
<!--                            <button class="btn btn-primary" @click="updateStatement(statement)">Save</button>-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {getRequest} from "../../api";
import {onMounted, ref} from "vue";

const sections = ref([]);

const statements = ref({});

const currentSection = ref({});

const currentStatement = ref({
    id: '',
    title: '',
    active: true,
});

const activeMap = ref({});

export default {
    name: "TestComponent",
    setup(){
        onMounted(async () => {
            sections.value = await getRequest('en/getServiceSectionStatements/1', [], true);
        })

        const addStatement = (statement) => {
            let temp = statements.value;
            let currentStat = currentStatement.value;

            // console.log()

            temp[statement.id] = {
                id: statement.id,
                title: statement.title,
                active: false,
            };

            statements.value = temp;

            activeMap.value[statement.id] = true;
            // currentSection.value[SectionId][currentStat.id] =
        }

        const updateStatement = (statement) => {
            statements.value[statement.id] = {
                id: statement.id,
                title: statement.title,
                active: false,
            }
        }

        const removeStatement = (id) => {
            delete statements.value[id];
        }

        return{
            sections,
            statements,
            activeMap,
            addStatement,
            updateStatement,
            removeStatement,
        }
    }
}
</script>

<style scoped>
/**{*/
/*    color: white;*/
/*}*/
</style>
