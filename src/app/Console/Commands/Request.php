<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class Request extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:req {model} {--single}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Make bootstrapped request file';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $model = $this->argument('model');
        $single = $this->option('single');

        if ($single) {
            Artisan::call('make:request', ['name' => "{$model}/{$model}Request"]);

            return;
        }

        Artisan::call('make:request', ['name' => "{$model}/Create{$model}Request"]);
        Artisan::call('make:request', ['name' => "{$model}/Update{$model}Request"]);
    }
}
