import {Injectable} from "@angular/core";
import {ApiService} from "../_core/api.service";
import {map, Observable} from "rxjs";
import {ICategoryDTOModel} from "../../models/i-category-dto-model";
import {environment} from "../../../environments/environment";
import {APIPath} from "../../constance/api-path";
import {HttpResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(
        private apiService: ApiService
    ) {
    }

    getCategories(): Observable<ICategoryDTOModel[]> {
        const path = `${environment.apiPath}/${APIPath.category.list}`;
        return this.apiService.get(path).pipe(
            map((res: HttpResponse<any>) => res.body)
        )
    }
}