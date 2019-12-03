export class WordFeatureAssociation {
    index: number;
    text: string;
    features: string[] = [];

    constructor(text: string,index: number){
        this.text = text;
        this.index = index;
    }
    
    addFeature(feature: string){
        this.features.push(feature);
    }

    removeFeature(feature: string){
        this.features = this.features.filter((item)=>{
            return item !== feature;
        })
    }

    toggleFeature(feature: string){
        if(this.features.indexOf(feature) < 0){
           this.addFeature(feature);
        }else{
           this.removeFeature(feature)
        }
    }

    getFeatures(){
        return this.features
    }
}
