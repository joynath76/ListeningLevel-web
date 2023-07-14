import { Component, ChangeDetectionStrategy, TemplateRef, ElementRef } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { SharedService } from "../services/shared.service";
import { User } from "../mockapi/models/User";
import { ListeningLevel } from "../mockapi/models/ListeningLevel";
import { ListeningLevelService } from "../services/listening.level.service";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
interface ListeningLevelOptions {
    name: string;
    code: string;
}
@Component({
    selector: 'app-listening-level',
    templateUrl: 'listening.level.component.html',
    providers: [DatePipe]
})
export class ListeningLevelComponent {
    constructor(private confirmationService: ConfirmationService, 
        private messageService: MessageService,
        private sharedService: SharedService,
        private listeningLevelService: ListeningLevelService,
        private router: Router,
        private datePipe: DatePipe) {}

    listeningLevelOptions: ListeningLevelOptions[];

    selectedLevel: ListeningLevelOptions;

    levelMapping: Map<String| undefined, String> = new Map();
    user: User;

    listeningLevels: ListeningLevel[] = [];

    listeningLevel: ListeningLevel;

    ngOnInit() {
        this.listeningLevelOptions = [
            { name: '-Select-', code: '' },
            { name: 'Listening Level 1', code: 'LL1' },
            { name: 'Listening Level 2', code: 'LL2' },
            { name: 'Listening Level 3', code: 'LL3' },
        ];
        this.levelMapping.set("LL1", "Listening Level 1");
        this.levelMapping.set("LL2", "Listening Level 2");
        this.levelMapping.set("LL3", "Listening Level 3");
        this.user = this.sharedService.getUser();
        if(!this.user){
            this.router.navigate(['login']);
        }
        this.listeningLevel = {
            createdOn: new Date(),
            listeningId: 0,
            listeningLevel: '',
            userId: this.user?.userId
        };
        this.listeningLevelService.getchListeningLevelByUserId(this.user?.userId).subscribe(response => {
            if(response.length){
                this.listeningLevels = this.listeningLevels.concat(response);
            }
        })
    }

    onSubmit() {
        this.listeningLevel.listeningLevel = this.selectedLevel.code;
        if(this.listeningLevels.length){
            let recentListeningLevel = this.listeningLevels[this.listeningLevels.length - 1];
            let lastRecoredDate = this.datePipe.transform(recentListeningLevel.createdOn, 'dd-MM-yyyy');
            let todaysDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
            if(lastRecoredDate === todaysDate){
                this.messageService.add({ severity: 'warning', summary: 'warning', detail: 'Listening Level Already Saved for today' });
                return;
            }
        }
        this.confirmationService.confirm({
            message: 'You can record your listening level once a day, Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.listeningLevelService.saveListeningLevel(this.listeningLevel).subscribe(resp => {
                    if(resp){
                        this.listeningLevels.push(resp);
                        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Listening Level Saved successfully' });
                    }
                });
            },
        });
    }

    onDelete(listeningLevelId: number){
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.listeningLevelService.deleteListeningLevelByListeningId(listeningLevelId).subscribe(() => {
                    this.listeningLevels = this.listeningLevels.filter(listeningLevel  => listeningLevel.listeningId != listeningLevelId);
                    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Listening Level Deleted successfully' });
                });
            },
        });
    }

    doLogout(){
        this.router.navigate(['login']);
    }
}