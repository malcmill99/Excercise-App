<template>
    <div class ="admin">
        <p class="content"><b>User Selected:</b> {{ selected }}</p>
        <b-field label="Find a user from the database">
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="e.g. Bruno Mars"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
    <div>
      <img alt="Vue logo" src="../assets/administrator.png" />
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    'Ariana Grande',
                    'Bruno Mars',
                    'The Weeknd',
                    'Floyd Mayweather',
                    'Bernie Sanders',
                    'Summer Walker',
                    'Leonardo DiCaprio',
                    'Billie Eilish',
                    'Jhene Aiko',
                    'Dolly Parton',
                    'Chris Stapleton',
                    'Axl Rose'
                ],
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>