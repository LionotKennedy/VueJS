<template>
    <v-footer>
        <v-card elevation="0" rounded="0" width="100%" class="bg-grey text-center">
            <v-card-text>
                <v-btn class="mw-4" icon="fas fa-comment" variant="palin" color="white"></v-btn>
                <v-btn class="mw-4" icon="fas fa-university" variant="palin" color="white"></v-btn>
                <v-btn class="mw-4" icon="fas fa-wifi" variant="palin" color="white"></v-btn>
                <v-btn class="mw-4" icon="fas fa-podcast" variant="palin" color="white"></v-btn>
            </v-card-text>
            <v-card-text class="text-white">
                @ {{ new Date().getFullYear() }}
                <strong>Style Antaravay tsy saky tsapa</strong><br>
                <strong>
                    AAE IdeaPro All Rights Reserved
                </strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterView'
}
</script>

<style>
.v-footer {
    padding: 8px 0 !important;
}
</style>