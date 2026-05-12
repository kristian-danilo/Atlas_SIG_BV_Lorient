var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_OpenStreetMapOSMstyleNoiretblanc_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://tile.geobretagne.fr/osm/service",
                              attributions: ' ',
                              params: {
                                "LAYERS": "osm:grey",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'OpenStreetMap - OSM style Noir et blanc',
                            popuplayertitle: 'OpenStreetMap - OSM style Noir et blanc',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OpenStreetMapOSMstyleNoiretblanc_1, 0]);
var lyr_OpenStreetMapOSMstyleDsatur_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://tile.geobretagne.fr/osm/service",
                              attributions: ' ',
                              params: {
                                "LAYERS": "osm:faded",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'OpenStreetMap - OSM style Désaturé',
                            popuplayertitle: 'OpenStreetMap - OSM style Désaturé',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OpenStreetMapOSMstyleDsatur_2, 0]);
var lyr_OpenStreetMapOSMstyleNaturaliste_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://tile.geobretagne.fr/osm/service",
                              attributions: ' ',
                              params: {
                                "LAYERS": "osm:naturaliste",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'OpenStreetMap - OSM style Naturaliste',
                            popuplayertitle: 'OpenStreetMap - OSM style Naturaliste',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OpenStreetMapOSMstyleNaturaliste_3, 0]);
var lyr_MNTcarteombrage_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geobretagne.fr/geoserver/alti/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mnt5so-shade",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MNT carte ombrage',
                            popuplayertitle: 'MNT carte ombrage',
                            type: '',
                            opacity: 0.800000,
                            
                            
                          });
              wms_layers.push([lyr_MNTcarteombrage_4, 0]);
var lyr_Anciennes_C_Lor_LCHAURIS_Scorf_georef_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Anciennes_C_Lor_L-CHAURIS_Scorf_georef<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Anciennes_C_Lor_LCHAURIS_Scorf_georef_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-379472.388903, 6067608.296835, -372424.861037, 6074586.517070]
        })
    });
var lyr_Anciennes_C_Lor_LCHAURIS_1836_georef_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Anciennes_C_Lor_L-CHAURIS_1836_georef<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Anciennes_C_Lor_LCHAURIS_1836_georef_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-393614.391207, 6046854.016598, -347800.221918, 6090579.327883]
        })
    });
var lyr_Anciennes_C_Lor_LCHAURIS_Blavet_georef_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Anciennes_C_Lor_L-CHAURIS_Blavet_georef<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Anciennes_C_Lor_LCHAURIS_Blavet_georef_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-369286.686558, 6069152.782248, -361409.510657, 6078554.294769]
        })
    });
var format_Rochesprsentes_8 = new ol.format.GeoJSON();
var features_Rochesprsentes_8 = format_Rochesprsentes_8.readFeatures(json_Rochesprsentes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rochesprsentes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rochesprsentes_8.addFeatures(features_Rochesprsentes_8);
var lyr_Rochesprsentes_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rochesprsentes_8, 
                style: style_Rochesprsentes_8,
                popuplayertitle: 'Roches présentes',
                interactive: false,
    title: 'Roches présentes<br />\
    <img src="styles/legend/Rochesprsentes_8_0.png" /> Amphibolite<br />\
    <img src="styles/legend/Rochesprsentes_8_1.png" /> Andésite<br />\
    <img src="styles/legend/Rochesprsentes_8_2.png" /> Argile<br />\
    <img src="styles/legend/Rochesprsentes_8_3.png" /> Basalte<br />\
    <img src="styles/legend/Rochesprsentes_8_4.png" /> Basanite<br />\
    <img src="styles/legend/Rochesprsentes_8_5.png" /> Boue<br />\
    <img src="styles/legend/Rochesprsentes_8_6.png" /> Calcaire<br />\
    <img src="styles/legend/Rochesprsentes_8_7.png" /> Conglomérat<br />\
    <img src="styles/legend/Rochesprsentes_8_8.png" /> Craie<br />\
    <img src="styles/legend/Rochesprsentes_8_9.png" /> Diorite<br />\
    <img src="styles/legend/Rochesprsentes_8_10.png" /> Dolomite<br />\
    <img src="styles/legend/Rochesprsentes_8_11.png" /> Gabbro<br />\
    <img src="styles/legend/Rochesprsentes_8_12.png" /> Gneiss<br />\
    <img src="styles/legend/Rochesprsentes_8_13.png" /> Granit<br />\
    <img src="styles/legend/Rochesprsentes_8_14.png" /> Granitoïde<br />\
    <img src="styles/legend/Rochesprsentes_8_15.png" /> Granodiorite<br />\
    <img src="styles/legend/Rochesprsentes_8_16.png" /> Gravier<br />\
    <img src="styles/legend/Rochesprsentes_8_17.png" /> Grès<br />\
    <img src="styles/legend/Rochesprsentes_8_18.png" /> Marbre<br />\
    <img src="styles/legend/Rochesprsentes_8_19.png" /> Matériau généré par l\'impact<br />\
    <img src="styles/legend/Rochesprsentes_8_20.png" /> Matériau igné<br />\
    <img src="styles/legend/Rochesprsentes_8_21.png" /> Matériau igné fragmentaire<br />\
    <img src="styles/legend/Rochesprsentes_8_22.png" /> Mica Schiste<br />\
    <img src="styles/legend/Rochesprsentes_8_23.png" /> Migmatite<br />\
    <img src="styles/legend/Rochesprsentes_8_24.png" /> MonzoGranite<br />\
    <img src="styles/legend/Rochesprsentes_8_25.png" /> Orthogneiss<br />\
    <img src="styles/legend/Rochesprsentes_8_26.png" /> Paragneiss<br />\
    <img src="styles/legend/Rochesprsentes_8_27.png" /> Peridotite<br />\
    <img src="styles/legend/Rochesprsentes_8_28.png" /> Quartz diorite<br />\
    <img src="styles/legend/Rochesprsentes_8_29.png" /> Quartzite<br />\
    <img src="styles/legend/Rochesprsentes_8_30.png" /> Rhyolitoid<br />\
    <img src="styles/legend/Rochesprsentes_8_31.png" /> Roche doléritique<br />\
    <img src="styles/legend/Rochesprsentes_8_32.png" /> Roche ignée phanéritique<br />\
    <img src="styles/legend/Rochesprsentes_8_33.png" /> Roche ignée ultramafique<br />\
    <img src="styles/legend/Rochesprsentes_8_34.png" /> Roche métamorphique<br />\
    <img src="styles/legend/Rochesprsentes_8_35.png" /> Roche sédimentaire carbonatée impure<br />\
    <img src="styles/legend/Rochesprsentes_8_36.png" /> Sable<br />\
    <img src="styles/legend/Rochesprsentes_8_37.png" /> Schiste<br />\
    <img src="styles/legend/Rochesprsentes_8_38.png" /> Tonalite<br />\
    <img src="styles/legend/Rochesprsentes_8_39.png" /> Trachyte<br />\
    <img src="styles/legend/Rochesprsentes_8_40.png" /> Trachytoïde<br />\
    <img src="styles/legend/Rochesprsentes_8_41.png" /> Wacke<br />\
    <img src="styles/legend/Rochesprsentes_8_42.png" /> <br />' });
var lyr_Cartegologique_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoservices.brgm.fr/geologie",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GEOLOGIE",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Carte géologique',
                            popuplayertitle: 'Carte géologique',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Cartegologique_9, 0]);
var lyr_Exploitationsdematriauxenactivitpointsetcontours_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoservices.brgm.fr/odmgm",
                              attributions: ' ',
                              params: {
                                "LAYERS": "EXPLOIT_ACTIVE",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Exploitations de matériaux en activité (points et contours)',
                            popuplayertitle: 'Exploitations de matériaux en activité (points et contours)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Exploitationsdematriauxenactivitpointsetcontours_10, 0]);
var lyr_Exploitationsdematriauxfermespointsetcontours_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoservices.brgm.fr/odmgm",
                              attributions: ' ',
                              params: {
                                "LAYERS": "EXPLOIT_FERMEE",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Exploitations de matériaux fermées (points et contours)',
                            popuplayertitle: 'Exploitations de matériaux fermées (points et contours)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Exploitationsdematriauxfermespointsetcontours_11, 0]);
var format_Limites_12 = new ol.format.GeoJSON();
var features_Limites_12 = format_Limites_12.readFeatures(json_Limites_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_12.addFeatures(features_Limites_12);
var lyr_Limites_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limites_12, 
                style: style_Limites_12,
                popuplayertitle: 'Limites',
                interactive: false,
                title: '<img src="styles/legend/Limites_12.png" /> Limites'
            });
var format_Masque_13 = new ol.format.GeoJSON();
var features_Masque_13 = format_Masque_13.readFeatures(json_Masque_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masque_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masque_13.addFeatures(features_Masque_13);
var lyr_Masque_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masque_13, 
                style: style_Masque_13,
                popuplayertitle: 'Masque',
                interactive: false,
                title: '<img src="styles/legend/Masque_13.png" /> Masque'
            });
var format_CarrresetsitesdintretgologiquedupaysdeLorient_14 = new ol.format.GeoJSON();
var features_CarrresetsitesdintretgologiquedupaysdeLorient_14 = format_CarrresetsitesdintretgologiquedupaysdeLorient_14.readFeatures(json_CarrresetsitesdintretgologiquedupaysdeLorient_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarrresetsitesdintretgologiquedupaysdeLorient_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarrresetsitesdintretgologiquedupaysdeLorient_14.addFeatures(features_CarrresetsitesdintretgologiquedupaysdeLorient_14);
var lyr_CarrresetsitesdintretgologiquedupaysdeLorient_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarrresetsitesdintretgologiquedupaysdeLorient_14, 
                style: style_CarrresetsitesdintretgologiquedupaysdeLorient_14,
                popuplayertitle: 'Carrères et sites d\'intéret géologique du pays de Lorient',
                interactive: true,
    title: 'Carrères et sites d\'intéret géologique du pays de Lorient<br />\
    <img src="styles/legend/CarrresetsitesdintretgologiquedupaysdeLorient_14_0.png" /> Ancienne carrière<br />\
    <img src="styles/legend/CarrresetsitesdintretgologiquedupaysdeLorient_14_1.png" /> Ancienne carrière visitée<br />\
    <img src="styles/legend/CarrresetsitesdintretgologiquedupaysdeLorient_14_2.png" /> Carrière en activité<br />\
    <img src="styles/legend/CarrresetsitesdintretgologiquedupaysdeLorient_14_3.png" /> Carrière en activité visitée<br />\
    <img src="styles/legend/CarrresetsitesdintretgologiquedupaysdeLorient_14_4.png" /> Affleurement<br />\
    <img src="styles/legend/CarrresetsitesdintretgologiquedupaysdeLorient_14_5.png" /> Affleurement visité<br />\
    <img src="styles/legend/CarrresetsitesdintretgologiquedupaysdeLorient_14_6.png" /> Falaise naturelle<br />\
    <img src="styles/legend/CarrresetsitesdintretgologiquedupaysdeLorient_14_7.png" /> Falaise naturelle visitée<br />\
    <img src="styles/legend/CarrresetsitesdintretgologiquedupaysdeLorient_14_8.png" /> Autre<br />\
    <img src="styles/legend/CarrresetsitesdintretgologiquedupaysdeLorient_14_9.png" /> Autre visité<br />' });
var group_CommunesdupaysdeLorientCENBV = new ol.layer.Group({
                                layers: [lyr_Limites_12,lyr_Masque_13,],
                                fold: 'close',
                                title: 'Communes du pays de Lorient (CEN-BV)'});
var group_ExploitationsgisementsdonnesBRGM = new ol.layer.Group({
                                layers: [lyr_Exploitationsdematriauxenactivitpointsetcontours_10,lyr_Exploitationsdematriauxfermespointsetcontours_11,],
                                fold: 'close',
                                title: 'Exploitations-gisements (données BRGM)'});
var group_msMINES_EMP = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'ms:MINES_EMP'});
var group_msGITES_EMP = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'ms:GITES_EMP'});
var group_CarteGologiqueharmonisevecteur = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Carte Géologique harmonisée (vecteur)'});
var group_CartesgologiquesetrochesBRGM = new ol.layer.Group({
                                layers: [lyr_Rochesprsentes_8,lyr_Cartegologique_9,],
                                fold: 'close',
                                title: 'Cartes géologiques et roches (BRGM)'});
var group_msLITHO_1M_SIMPLIFIEE = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'ms:LITHO_1M_SIMPLIFIEE'});
var group_Cartesanciennesgorfrences = new ol.layer.Group({
                                layers: [lyr_Anciennes_C_Lor_LCHAURIS_Scorf_georef_5,lyr_Anciennes_C_Lor_LCHAURIS_1836_georef_6,lyr_Anciennes_C_Lor_LCHAURIS_Blavet_georef_7,],
                                fold: 'close',
                                title: 'Cartes anciennes géoréférencées'});
var group_LidarHDIGN = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Lidar HD IGN'});

lyr_GoogleSatellite_0.setVisible(false);lyr_OpenStreetMapOSMstyleNoiretblanc_1.setVisible(false);lyr_OpenStreetMapOSMstyleDsatur_2.setVisible(true);lyr_OpenStreetMapOSMstyleNaturaliste_3.setVisible(false);lyr_MNTcarteombrage_4.setVisible(true);lyr_Anciennes_C_Lor_LCHAURIS_Scorf_georef_5.setVisible(false);lyr_Anciennes_C_Lor_LCHAURIS_1836_georef_6.setVisible(false);lyr_Anciennes_C_Lor_LCHAURIS_Blavet_georef_7.setVisible(false);lyr_Rochesprsentes_8.setVisible(false);lyr_Cartegologique_9.setVisible(false);lyr_Exploitationsdematriauxenactivitpointsetcontours_10.setVisible(false);lyr_Exploitationsdematriauxfermespointsetcontours_11.setVisible(false);lyr_Limites_12.setVisible(true);lyr_Masque_13.setVisible(true);lyr_CarrresetsitesdintretgologiquedupaysdeLorient_14.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMapOSMstyleNoiretblanc_1,lyr_OpenStreetMapOSMstyleDsatur_2,lyr_OpenStreetMapOSMstyleNaturaliste_3,lyr_MNTcarteombrage_4,group_Cartesanciennesgorfrences,group_CartesgologiquesetrochesBRGM,group_ExploitationsgisementsdonnesBRGM,group_CommunesdupaysdeLorientCENBV,lyr_CarrresetsitesdintretgologiquedupaysdeLorient_14];
lyr_Rochesprsentes_8.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', 'DESCRIPTIO': 'DESCRIPTIO', 'LOWERAGE': 'LOWERAGE', 'UPPERAGE': 'UPPERAGE', 'URN_LITHO1': 'URN_LITHO1', 'URN_LITHO2': 'URN_LITHO2', 'URN_LITHO3': 'URN_LITHO3', 'URN_LITHO4': 'URN_LITHO4', 'URN_LITHO5': 'URN_LITHO5', });
lyr_Limites_12.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', });
lyr_Masque_13.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'nom_officiel': 'nom_officiel', 'code_insee': 'code_insee', 'code_siren': 'code_siren', });
lyr_CarrresetsitesdintretgologiquedupaysdeLorient_14.set('fieldAliases', {'fid': 'Identifiant unique', 'Type': 'Type', 'Lieux_dit': 'Nom du lieu dit', 'Commune': 'Commune', 'Roches': 'Roches présentes', 'Photo1': 'Photo N°1', 'Photo2': 'Photo N°2', 'Photo3': 'Photo N°3', 'FrontV': 'Front de taille visible', 'HautFT': 'Hauteur du front de taille (m)', 'IntéretsN': 'Intérets naturalistes', 'IntéretP': 'Intéret pédagogique', 'Lat': 'Latitude L93', 'Long': 'Longitude L93', 'Comment': 'Commentaires', 'Visite': 'Visite de terrain', 'DateV': 'Date de la dernière visite', 'Milieux': 'Milieux', 'Visible': 'Visible', 'Invasives': 'Présences d\'EEE', 'Etiquette_Qgis2Web': 'Etiquette_Qgis2Web', });
lyr_Rochesprsentes_8.set('fieldImages', {'ID': 'TextEdit', 'NAME': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'LOWERAGE': 'TextEdit', 'UPPERAGE': 'TextEdit', 'URN_LITHO1': 'TextEdit', 'URN_LITHO2': 'TextEdit', 'URN_LITHO3': 'TextEdit', 'URN_LITHO4': 'TextEdit', 'URN_LITHO5': 'TextEdit', });
lyr_Limites_12.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Masque_13.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'nom_officiel': 'TextEdit', 'code_insee': 'TextEdit', 'code_siren': 'TextEdit', });
lyr_CarrresetsitesdintretgologiquedupaysdeLorient_14.set('fieldImages', {'fid': 'TextEdit', 'Type': 'ValueMap', 'Lieux_dit': 'TextEdit', 'Commune': 'ValueRelation', 'Roches': 'ValueRelation', 'Photo1': 'ExternalResource', 'Photo2': 'ExternalResource', 'Photo3': 'ExternalResource', 'FrontV': 'CheckBox', 'HautFT': 'TextEdit', 'IntéretsN': 'ValueRelation', 'IntéretP': 'CheckBox', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Comment': 'TextEdit', 'Visite': 'CheckBox', 'DateV': 'DateTime', 'Milieux': 'ValueRelation', 'Visible': 'CheckBox', 'Invasives': 'ValueRelation', 'Etiquette_Qgis2Web': 'TextEdit', });
lyr_Rochesprsentes_8.set('fieldLabels', {'ID': 'no label', 'NAME': 'no label', 'DESCRIPTIO': 'no label', 'LOWERAGE': 'no label', 'UPPERAGE': 'no label', 'URN_LITHO1': 'no label', 'URN_LITHO2': 'no label', 'URN_LITHO3': 'no label', 'URN_LITHO4': 'no label', 'URN_LITHO5': 'no label', });
lyr_Limites_12.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', });
lyr_Masque_13.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'nom_officiel': 'no label', 'code_insee': 'no label', 'code_siren': 'no label', });
lyr_CarrresetsitesdintretgologiquedupaysdeLorient_14.set('fieldLabels', {'fid': 'inline label - visible with data', 'Type': 'no label', 'Lieux_dit': 'no label', 'Commune': 'no label', 'Roches': 'header label - visible with data', 'Photo1': 'no label', 'Photo2': 'no label', 'Photo3': 'no label', 'FrontV': 'inline label - visible with data', 'HautFT': 'inline label - visible with data', 'IntéretsN': 'header label - visible with data', 'IntéretP': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Comment': 'header label - visible with data', 'Visite': 'inline label - visible with data', 'DateV': 'inline label - visible with data', 'Milieux': 'header label - visible with data', 'Visible': 'inline label - visible with data', 'Invasives': 'header label - visible with data', 'Etiquette_Qgis2Web': 'hidden field', });
lyr_CarrresetsitesdintretgologiquedupaysdeLorient_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});